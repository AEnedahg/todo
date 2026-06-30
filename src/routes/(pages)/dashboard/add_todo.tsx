import { createFileRoute } from '@tanstack/react-router'

import AddTodo from '../../-components/shared/AddTodo/AddTodo'

export const Route = createFileRoute('/(pages)/dashboard/add_todo')({
  component: AddTodo,
})
