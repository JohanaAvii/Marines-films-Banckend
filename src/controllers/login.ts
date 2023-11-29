import { Context, Env } from "hono";
import { sign } from "hono/jwt";
import { findUser } from "../models/user";

const login = async (c: Context<Env, "/", {}>) => {
  const { email, password } = await c.req.json();
  try {
    const user = await findUser(email);
    if (user == null) {
      console.log("Usuario no existe");

      return c.json(
        {
          error: false,
          message: "Correo o contraseña incorrecta.",
        },
        204
      );
    }
    if (!Bun.password.verifySync(password, user?.contrasena)) {
      console.log("Contraseña incorrecta");
      return c.json(
        {
          error: false,
          message: "Correo o contraseña incorrecta.",
        },
        204
      );
    }
    const { rol, id, genero } = user;
    const token = await sign({ rol, id, genero }, process.env.HASH ?? "");

    return c.json({
      error: false,
      message: "",
      body: {
        access_token: token,
      },
    });
  } catch (error) {
    return c.json(
      {
        error: true,
        message: "Error al iniciar sesión.",
        body: error,
      },
      500
    );
  }
};

export { login };
