import { useRef, useEffect } from "react";

import { Link, useNavigate } from "@tanstack/react-router";

import styles from "./EditTodo.module.css";

import { useForm } from "react-hook-form";

import { Todo } from "../../../../schema/Todo";

import * as z from 'zod';

import { Route } from "../../../(pages)/dashboard/edit_todo.$id";

import { zodResolver } from "@hookform/resolvers/zod";

import { useTodoStore } from "../../../../store/useTodoStore";

type TodoType = z.infer<typeof Todo>;

export default function EditTodo() {

    const { id } = Route.useParams();

    const navigate = useNavigate();

    const todos = useTodoStore((state) => state.todos);

    const addTodo = useTodoStore((state) => state.addTodo);

    const addTitle = useTodoStore((state) => state.addTitle);

    const addDescription = useTodoStore((state) => state.addDescription);

    const addCategories = useTodoStore((state) => state.addCategories);

   const editIndex = Number(id);

    const editTodo = todos.find((todo) => todo.id === editIndex);

    const form = useForm<TodoType>({
        mode : 'onChange',
        defaultValues: {
            todos: [
                {
                    title : '',
                    description : '',
                    done : false,
                    category : {
                        work : true,
                        family : false,
                        entertainment : false,
                        study : false
                    }
                }
            ]
        },
        resolver : zodResolver(Todo),
    })

    const { formState, register, handleSubmit } = form;

    const onSubmit = (data: TodoType) => {
        console.log(data);

        addTodo();

        dialogRef.current?.close();

        navigate({ to: "/dashboard" });
    };

    const { errors, isValid} = formState;

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <>
            <dialog ref={dialogRef} className={styles.dialog}>
                <header className={styles.header}>
                    <Link to="/dashboard" className={styles.cancelLink}>
                        <small className={styles.cancel}>Cancel</small>
                    </Link>
                    <Link to='/dashboard'>
                        <button
                            form="add-to-form"
                            type='submit'
                            disabled={isValid}
                        >
                            Edit
                        </button>
                    </Link>
                </header>
                {editTodo && (
                    <form className={styles.form} id='add-to-form'  onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formControl}>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="add a title"
                                value={editTodo?.title}
                                {...register(`todos.${editIndex}.title`, {
                                    onChange: (e) =>
                                        addTitle(editTodo.id, e.target.value),
                                })}
                            />
                        </div>
                        <small className={styles.error}>
                            {errors.todos?.[editIndex]?.title?.message}
                        </small>
                        <div className={styles.formControl}>
                            <label htmlFor="desc">Description</label>
                            <textarea
                                id="desc"
                                rows={4}
                                value={editTodo.description}
                                placeholder="add a description"
                                {...register(`todos.${editIndex}.description`, {
                                    onChange: (e) =>
                                        addDescription(
                                            editTodo.id,
                                            e.target.value,
                                        ),
                                })}
                            ></textarea>
                        </div>
                        <small className={styles.error}>
                            {errors.todos?.[editIndex]?.description?.message}
                        </small>
                        <div>
                            <h3 className={styles.tags}>Tags</h3>
                            <div className={styles.tagsWrapper}>
                                <div
                                    className={styles.tagCont}
                                    style={{
                                        backgroundColor: editTodo.category.work
                                            ? "#f7f4f4ff"
                                            : "",
                                    }}
                                    onClick={() =>
                                        addCategories(editTodo.id, true, "work")
                                    }
                                >
                                    <div className={styles.work}></div>
                                    <p>work</p>
                                </div>
                                <div
                                    className={styles.tagCont}
                                    style={{
                                        backgroundColor: editTodo.category.study
                                            ? "#f7f4f4ff"
                                            : "",
                                    }}
                                    onClick={() =>
                                        addCategories(
                                            editTodo.id,
                                            true,
                                            "study",
                                        )
                                    }
                                >
                                    <div className={styles.study}></div>
                                    <p>study</p>
                                </div>
                                <div
                                    className={styles.tagCont}
                                    style={{
                                        backgroundColor: editTodo.category
                                            .entertainment
                                            ? "#f7f4f4ff"
                                            : "",
                                    }}
                                    onClick={() =>
                                        addCategories(
                                            editTodo.id,
                                            true,
                                            "entertainment",
                                        )
                                    }
                                >
                                    <div className={styles.entertainment}></div>
                                    <p>entertainment</p>
                                </div>
                                <div
                                    className={styles.tagCont}
                                    style={{
                                        backgroundColor: editTodo.category
                                            .family
                                            ? "#f7f4f4ff"
                                            : "",
                                    }}
                                    onClick={() =>
                                        addCategories(
                                            editTodo.id,
                                            true,
                                            "family",
                                        )
                                    }
                                >
                                    <div className={styles.family}></div>
                                    <p>family</p>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </dialog>
        </>
    );
}
