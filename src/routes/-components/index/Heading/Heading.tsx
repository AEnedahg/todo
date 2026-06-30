import { type ReactNode } from 'react';

import styles from './Heading.module.css';

export default function Heading () : ReactNode {
    
    return (
        <h1 className={styles.h1}>
            <span style={{color : 'var(--clr-tag-blue)'}}>t</span>
            <span style={{color : 'var(--clr-tag-pink)'}}>o</span>
            <span style={{color : 'var(--clr-tag-green)'}}>d</span>
            <span style={{color : 'var(--clr-tag-purple)'}}>o</span>
        </h1>
    );
}