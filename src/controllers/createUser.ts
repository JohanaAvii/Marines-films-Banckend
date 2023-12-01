import { Context, Env } from "hono";
import { saveUser } from "../models/user";

const createUser = async (c: Context<Env, "/", {}>) => {
  const { password, ...body } = await c.req.json();
  const cryptPassword = Bun.password.hashSync(password);
  try {
    const resp = await saveUser({ ...body, password: cryptPassword });
    return c.json(
      {
        error: false,
        message: "Usuario creado",
        body: resp,
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

export { createUser };
