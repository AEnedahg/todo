import { type ReactNode } from 'react';

import styles from './AsideMobile.module.css'

import CategoriesMobile from '../CategoriesMobile/CategoriesMobile';

import AsideFormMobile from '../AsideFormMobile/AsideFormMobile';

export default function AsideMobile () : ReactNode {

    return (
        <aside className={styles.aside}>
            <CategoriesMobile />
            <AsideFormMobile />
        </aside>
    );
}