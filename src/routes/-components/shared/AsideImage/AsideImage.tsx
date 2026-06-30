import { type ReactNode } from 'react';

import styles from './AsideImage.module.css';

import personOne from '@/images/dashboard/person_1.png';

export default function AsideImage () : ReactNode {

    return (
        <img className={styles.img} src={personOne} alt="image of person animation" />
    );
}