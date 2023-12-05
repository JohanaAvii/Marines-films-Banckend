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
        400
      );
    }
    if (!Bun.password.verifySync(password, user?.password)) {
      console.log("Contraseña incorrecta");
      return c.json(
        {
          error: false,
          message: "Correo o contraseña incorrecta.",
        },
        400
      );
    }
    const { rol, id } = user;
    const token = await sign({ rol, id }, process.env.SECRET_SEED ?? "");

    return c.json({
      error: false,
      message: "",
      body: {
        access_token: token,
      },
    });
  } catch (error) {
    console.log(error);

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
