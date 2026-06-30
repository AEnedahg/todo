import { type ReactNode, useState, useEffect } from 'react';

import styles from './Dashboard.module.css';

import Nav from '../../shared/Nav/Nav';

import Aside from '../../shared/Aside/Aside';

import DashboardTodos from '../../shared/DashboardTodos/DashboardTodos';

import AsideMobile from '../../shared/AsideMobile/AsideMobile';

import { Outlet } from '@tanstack/react-router';

export default function Dashboard () : ReactNode {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main className={styles.main}>
            <Nav />
            <Outlet />
            {windowSize.width >= 1024 && (
                <div className={styles.dashboardWrapper}>
                    <Aside />
                    <DashboardTodos />
                </div>
            )}
            {windowSize.width <= 1023 && (
                <div>
                    <div className={styles.dashboardWrapperMobile}>
                        <AsideMobile />
                    </div>
                    <DashboardTodos />
                </div>
            )}
        </main>
    );
}