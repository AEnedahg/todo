import { type ReactNode } from 'react';

import { useNavigate } from '@tanstack/react-router';

import { Link } from '@tanstack/react-router';

import './Button.css';

export default function Button ({text} : {text : string}) : ReactNode {

    const navigate = useNavigate();

    return (
        <Link to="/dashboard">
            <button onClick={() => navigate({ to: "/dashboard" })}>
                {text}
            </button>
        </Link>
    );
}