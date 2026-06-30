import { type ReactNode } from 'react';

import styles from './Aside.module.css'

import Categories from '../Categories/Categories';

import AsideForm from '../AsideForm/AsideForm';

import AsideImage from '../AsideImage/AsideImage';

export default function Aside () : ReactNode {

    return (
        <aside className={styles.aside}>
            <Categories />
            <AsideForm />
            <AsideImage />
        </aside>
    );
}