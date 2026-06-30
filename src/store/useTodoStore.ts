import { create } from 'zustand';

import * as z from 'zod';

import { type Todo } from '../schema/Todo';

type State = z.infer<typeof Todo>

type Category = keyof State["todos"][number]["category"];

type Actions = {
    addTodo: () => void;
    addCategories: (id: number, value: boolean, category: Category) => void;
    showCategories: (index: number) => void;
    completed: (index: number, val: State["todos"][number]["done"]) => void;
    addTitle: (index: number, title: State["todos"][number]["title"]) => void;
    addDescription: (
        index: number,
        description: State["todos"][number]["description"],
    ) => void;
    deleteTodo: (index: number) => void;
    showWork: () => void;
    showEntertainment: () => void;
    showStudy: () => void;
    showFamily: () => void;
    toggleHideCompleted : () => void;
};

export const useTodoStore = create<State & Actions>()((set) => ({
    todos: [
        {
            id: Date.now(),
            title: "The first task title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui nobis perspiciatis accusamus, modi esse pariatur nulla?",
            category: {
                work: true,
                study: true,
                entertainment: true,
                family: false,
            },
            done: false,
        },
        {
            id: Date.now() + 3000000,
            title: "The second task title",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem autem iusto maxime iste quisquam praesentium nobis laboriosam facere voluptatum illo! Voluptatum placeat incidunt ipsam iste, natus dignissimos quidem nostrum at non fuga fugit!",
            category: {
                work: false,
                study: false,
                entertainment: false,
                family: false,
            },
            done: false,
        },
        {
            id: Date.now() + 100000,
            title: "The third task title",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            category: {
                work: true,
                study: false,
                entertainment: true,
                family: false,
            },
            done: true,
        },
    ],
    hideCompleted: false,
    toggleHideCompleted: () =>
        set((state) => ({
            hideCompleted: !state.hideCompleted,
        })),
    showWork: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.category.work),
        })),
    showEntertainment: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.category.entertainment),
        })),
    showFamily: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.category.family),
        })),
    showStudy: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.category.study),
        })),
    deleteTodo: (index) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== index),
        })),
    addDescription: (index, description) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === index
                    ? {
                          ...todo,
                          description: description,
                      }
                    : todo,
            ),
        })),
    addTitle: (index, title) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === index
                    ? {
                          ...todo,
                          title: title,
                      }
                    : todo,
            ),
        })),
    completed: (index, done) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === index
                    ? {
                          ...todo,
                          done,
                      }
                    : todo,
            ),
        })),
    addCategories: (id, value, category) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          category: {
                              ...todo.category,
                              [category]: value,
                          },
                      }
                    : todo,
            ),
        })),
    showCategories: (index) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === index
                    ? {
                          ...todo,
                          category: {
                              ...todo.category,
                          },
                      }
                    : todo,
            ),
        })),
    addTodo: () =>
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: Date.now(),
                    title: "",
                    description: "",
                    category: {
                        work: true,
                        study: false,
                        entertainment: false,
                        family: false,
                    },
                    done: false,
                },
            ],
        })),
}));


