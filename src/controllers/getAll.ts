import { Context, Env } from "hono";
import { getAll as getAllUser } from "../models/user";

const getAll = async (c: Context<Env, "/", {}>) => {
  try {
    const { size, page } = await c.req.query();
    const users = await getAllUser(
      Number.parseInt(page) ?? 0,
      Number.parseInt(size) ?? 10
    );
    return c.json({
      status: 200,
      error: false,
      message: "",
      body: users,
    });
  } catch (error) {
    return c.json({
      status: 500,
      error: true,
      message: "Error de servidor",
      body: error,
    });
  }
};

export { getAll };
