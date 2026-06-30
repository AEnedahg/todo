import { type ReactNode } from 'react';

import styles from './Categories.module.css';

export default function Categories () : ReactNode {

    return (
        <div className={styles.categoriesWrapper}>
            <div className={styles.tagCont}>
                <div className={styles.work}></div>
                <p>work</p>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.study}></div>
                <p>study</p>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.entertainment}></div>
                <p>entertainment</p>
            </div>
            <div className={styles.tagCont}>
                <div className={styles.family}></div>
                <p>family</p>
            </div>
        </div>
    );
}