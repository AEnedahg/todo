import { type ReactNode } from 'react';

import styles from './AsideForm.module.css';

import { useTodoStore } from '../../../../store/useTodoStore';

export default function AsideForm () : ReactNode {

    const toggleHideCompleted = useTodoStore(
        (state) => state.toggleHideCompleted,
    );

    const hideCompleted = useTodoStore((state) => state.hideCompleted);

    return (
        <form className={styles.form}>
            <input
                type="checkbox"
                id="hide-done"
                checked={hideCompleted}
                onChange={toggleHideCompleted}
            />
            <label className={styles.label} htmlFor="hide-done">
                Hide Done Tasks
            </label>
        </form>
    );
}