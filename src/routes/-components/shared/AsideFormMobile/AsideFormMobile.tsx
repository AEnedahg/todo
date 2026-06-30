import { type ReactNode } from 'react';

import styles from './AsideFormMobile.module.css';

import { useTodoStore } from '../../../../store/useTodoStore';

export default function AsideFormMobile () : ReactNode {

    const toggleHideCompleted = useTodoStore(
        (state) => state.toggleHideCompleted,
    );

    const hideCompleted = useTodoStore((state) => state.hideCompleted);

    return (
        <form className={styles.formAsideMobile}>
            <input type="checkbox" className={styles.formAsideMobileCheckbox} id="hide-done" checked={hideCompleted} onClick={toggleHideCompleted}/>
            <label className={styles.label} htmlFor="hide-done">Hide Done Tasks</label>
        </form>
    );
}