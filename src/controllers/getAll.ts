import { Context, Env } from "hono";
import { getAll as getAllUser } from "../models/user";

const getAll = async (c: Context<Env, "/", {}>) => {
  try {
    const users = await getAllUser();
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
