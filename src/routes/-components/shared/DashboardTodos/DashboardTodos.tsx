import { type ReactNode, useState } from 'react';

import styles from './DashboardTodos.module.css'

import { useTodoStore } from '../../../../store/useTodoStore';

import { Ellipsis } from 'lucide-react';

import { useNavigate } from '@tanstack/react-router';

export default function DashboardTodos () : ReactNode {

    const [showId, setShowId] = useState<number | null>(null);

    const todos = useTodoStore((state) => state.todos);

    const completed = useTodoStore((state) => state.completed);

    const navigate = useNavigate();

    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    function handleShow(id: number) {
        setShowId((prev) => (prev === id ? null : id));
    }

    const hideCompleted = useTodoStore((state) => state.hideCompleted);

    const filteredTodos = hideCompleted
        ? todos.filter((todo) => !todo.done)
        : todos;
    return (
        <section className={styles.section}>
            {filteredTodos.map((todo) => {
                const index = todo.id;

                return (
                    <div className={styles.todosWrapper} key={todo.id}>
                        <header className={styles.header}>
                                <h3
                                    className={
                                        todo.done ? styles.strikedTitle : ""
                                    }
                                >
                                    {todo.title}
                                </h3>
                                <Ellipsis
                                    color="#69665C"
                                    className={styles.ellipsis}
                                    onClick={() => handleShow(todo.id)}
                                />
                                {showId === todo.id && (
                                    <div className={styles.actionsCont}>
                                        <small
                                            className={styles.actions}
                                            onClick={() =>
                                                navigate({
                                                    to: `/dashboard/edit_todo/${todo.id}`,
                                                    params : {
                                                        id : String(index)
                                                    }
                                                })
                                            }
                                        >
                                            Edit
                                        </small>

                                        <small
                                            className={styles.actions}
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            Delete
                                        </small>
                                    </div>
                                )}
                            </header>
                            <p
                                className={
                                    todo.done
                                        ? styles.strikedDescription
                                        : styles.description
                                }
                            >
                                {todo.description}
                            </p>
                            <footer className={styles.footer}>
                                <div className={styles.categoriesWrapper}>
                                    {todo.category.work == true && (
                                        <div className={styles.work}></div>
                                    )}
                                    {todo.category.entertainment == true && (
                                        <div
                                            className={styles.entertainment}
                                        ></div>
                                    )}
                                    {todo.category.study == true && (
                                        <div className={styles.study}></div>
                                    )}
                                    {todo.category.family == true && (
                                        <div className={styles.family}></div>
                                    )}
                                </div>
                                <form className={styles.form}>
                                    <input
                                        type="checkbox" className={styles.dashboardTodosCheck}
                                        id={`todo.${index}`}
                                        checked={todo.done}
onChange={() => completed(index, !todo.done)}
                                        onClick={() =>
                                            completed(index, !todo.done)
                                        }
                                    />
                                    <label
                                        className={styles.label}
                                        htmlFor={`todo.${index}`}
                                    >
                                        Done
                                    </label>
                                </form>
                            </footer>
                    </div>
                );
            })}
        </section>
    );
}