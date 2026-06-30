import { createFileRoute } from "@tanstack/react-router";

import EditTodo from "../../-components/shared/EditTodo/EditTodo";

export const Route = createFileRoute("/(pages)/dashboard/edit_todo/$id")({
    component: EditTodo,
});
