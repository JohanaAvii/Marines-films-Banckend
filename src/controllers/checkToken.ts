import { Context, Env } from "hono";
import { verify } from "hono/jwt";

export const checkToken = async (context: Context<Env, "/users/token", {}>) => {
  try {
    const { authorization } = context.req.header();
    const resp = await verify(
      authorization.split(" ")[1],
      process.env.SECRET_SEED ?? ""
    );
    if (resp) {
      return context.json({ error: false, message: "verificado" }, 200);
    }
  } catch (error) {
    return context.json({
      error: true,
      message: "Error al verificar",
      body: error,
    });
  }
};
