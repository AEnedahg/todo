import { type ReactNode } from 'react';

import styles from './CategoriesMobile.module.css';

export default function CategoriesMobile () : ReactNode {

    return (
        <div className={styles.categoriesWrapper}>
            <div className={styles.tagCont}>
                <div className={styles.work}></div>
                <small>work</small>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.study}></div>
                <small>study</small>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.entertainment}></div>
                <small>entertainment</small>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.family}></div>
                <small>family</small>
            </div>
        </div>
    );
}