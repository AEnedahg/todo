import { type ReactNode } from 'react';

import { Navigate } from '@tanstack/react-router';

// import styles from './NotFound.module.css';

export default function NotFoundPage () : ReactNode {
    Navigate({to : '/not_found_page'});
    return (
        <div>
            404 - Page Not Found  
        </div>
    );
}