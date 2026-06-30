import * as z from "zod";

export const Todo = z.object({
    todos: z.array(
        z.object({
            id : z.number(),
            title: z
                .string()
                .nonempty("It must not be empty")
                .min(2, "Minimum of two characters")
                .max(20, "Maximum of 20 characters"),
            description: z
                .string()
                .nonempty("It must not be empty")
                .min(10, "Minimum of ten characters"),
            category: z.object({
                    work: z.boolean(),
                    study: z.boolean(),
                    entertainment: z.boolean(),
                    family: z.boolean(),
                }),
            done: z.boolean(),
        }),
    ),
    hideCompleted : z.boolean()
});
