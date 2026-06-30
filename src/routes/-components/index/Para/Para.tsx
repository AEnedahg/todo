import { type ReactNode } from 'react';

import styles from './Para.module.css';

export default function Para () : ReactNode {

    return (
        <p className={styles.text}>Experience a smarter, more productive way to manage your life, one checklist at a time.</p>
    );
}