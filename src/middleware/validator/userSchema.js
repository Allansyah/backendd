const { z } = require("zod");

const createUserSchema = z.object({
    name: z.string().min(3, "Name mus be at least 3 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    role: z.string().min(4, "Role must be at least 4 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})

module.exports = { createUserSchema }