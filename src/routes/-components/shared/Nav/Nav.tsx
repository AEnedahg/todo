import { type ReactNode } from 'react';

import { Plus } from 'lucide-react';

import styles from './Nav.module.css';

import { Link } from '@tanstack/react-router';

import { useTodoStore } from '../../../../store/useTodoStore';

export default function Nav () : ReactNode {

const addTodo = useTodoStore((state) => state.addTodo);

    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>todo</h1>
            <Link to='/dashboard/add_todo' onClick={() => addTodo()}>
                <Plus color="#69665C" size={48}/>
            </Link>
        </nav>
    );
}