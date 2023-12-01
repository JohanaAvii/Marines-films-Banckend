import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { getAll, login, createUser } from "./controllers";
import { loginSchema, userSchema } from "./schemas";
import { validateFields } from "./middlewares";

// Iniciar el servidor
const app = new Hono();

// Middlewares
app.use(
  "/users/*",
  jwt({
    secret: process.env.SECRET_SEED ?? "",
  })
);
app.use(cors());

// Rutas
app.get("/users", getAll);
app.post("/users", validateFields(userSchema), createUser);
// app.post("/login", validateFields(loginSchema), login);
app.post("/login", validateFields(loginSchema), login);

// Endpoint para crear el primer usuario
app.post("/8B7HMzd49Aqiyo", createUser);

export default app;
