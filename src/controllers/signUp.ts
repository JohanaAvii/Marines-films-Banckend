import { Context, Env } from "hono";
import { saveUser } from "../models/user";
import { sign } from "jsonwebtoken";
import { Usuario } from "../generated/client";

export const signUp = async (c: Context<Env, "/sign-up", {}>) => {
  const { password, ...body } = await c.req.json();
  const cryptPassword = Bun.password.hashSync(password);
  try {
    const user = (await saveUser({
      ...body,
      password: cryptPassword,
    })) as Usuario;

    const { rol, id } = user;
    const token = await sign({ rol, id }, process.env.SECRET_SEED ?? "");
    return c.json(
      {
        error: false,
        message: "Usuario creado",
        body: {
          access_token: token,
        },
      },
      201
    );
  } catch (error) {
    return c.json(
      {
        error: true,
        message: "Error al crear usuario",
        body: error,
      },
      201
    );
  }
};
