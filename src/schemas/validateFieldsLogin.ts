import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es obligatorio.",
      description: "Email del usuario.",
    })
    .email("Debe ser un email válido."),
  password: z.string({
    description: "Contraseña del usuario.",
    required_error: "Contraseña requerida.",
  }),
});

export { loginSchema };
