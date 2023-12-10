import { Context, Env } from "hono";
import { findUserById } from "../models/user";

export const gentUser = async (c: Context<Env, "/users/:id", {}>) => {
  const { id } = c.req.param();
  try {
    const user = await findUserById(Number.parseInt(id));
    return c.json(
      {
        error: false,
        message:
          user == null ? "Usuario no encontrado." : "Usuario encontrado.",
        body: user,
      },
      user == null ? 204 : 200
    );
  } catch (error) {
    return c.json({
      error: false,
      message: "Error al buscar usuario.",
      body: error,
    });
  }
};
