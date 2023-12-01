import { z } from "zod";

const userSchema = z.object({
  primer_nombre: z.string({
    description: "Nombre de la persona.",
    required_error: "Se necesita por lo menos el primer nombre.",
  }),
  primer_apellido: z.string({
    description: "Apellido de la persona.",
    required_error: "Se necesita por lo menos el primer apellido.",
  }),
  correo: z
    .string({
      description: "Correo del usuario",
      required_error: "Correo obligatorio.",
    })
    .email("Correo no válido."),
  password: z.string({
    description: "Contraseña de la cuenta",
    required_error: "La contraseña es requerida.",
  }),
  genero: z
    .string({ description: "Genero del usuario." })
    .max(1, "El género debe ser 1 letra."),
  telefono: z
    .string({
      description: "Teléfono del usuario.",
      required_error: "El teléfono es obligatorio",
    })
    .min(8, "Debe al menos tener 8 dígitos.")
    .max(10, "Debe tener máximo 10 caracteres."),
  rol: z.string({
    description: "Rol del usuario en la aplicación",
    required_error: "Se necesita el rol del usuario",
  }),
});

export { userSchema };
