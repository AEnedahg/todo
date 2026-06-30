import { createFileRoute } from '@tanstack/react-router'

import NotFoundPage from '../-components/not_found/NotFound/NotFound'

export const Route = createFileRoute('/(pages)/not_found_page')({
  component: NotFoundPage,
})
