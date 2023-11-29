import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { getAll, login, createUser } from "./controllers";

// Iniciar el servidor
const app = new Hono();
// Middlewares
app.use(
  "/users",
  jwt({
    secret: process.env.HASH ?? "",
  })
);
app.use(cors());

// Rutas
app.get("/users", getAll);
app.post("/users", createUser);
app.post("/login", login);

// Endpoint para crear el primer usuario
app.post("/8B7HMzd49Aqiyo", createUser);

export default app;
