import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { getAll, login, createUser } from "./controllers";
import { loginSchema, userSchema } from "./schemas";
import { validateFields } from "./middlewares";
import { checkToken } from "./controllers/checkToken";

// Iniciar el servidor
const app = new Hono();

app.use("*", cors());
// Middlewares
app.use(
  "/users/*",
  jwt({
    secret: process.env.SECRET_SEED ?? "",
  })
);

// Rutas
app.get("/users", getAll);
app.post("/users", validateFields(userSchema), createUser);
// app.post("/login", validateFields(loginSchema), login);
app.post("/login", validateFields(loginSchema), login);
app.get("/users/token", checkToken);

// Endpoint para crear el primer usuario
app.post("/8B7HMzd49Aqiyo", createUser);

console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT,
});
