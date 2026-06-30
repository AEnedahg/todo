import { createFileRoute } from '@tanstack/react-router';

import Dashboard from '../../-components/dashboard/Dashboard/Dashboard';

export const Route = createFileRoute('/(pages)/dashboard')({
    component : Dashboard
})