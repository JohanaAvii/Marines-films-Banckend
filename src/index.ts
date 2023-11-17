import { Hono } from "hono";
import { getAll } from "./controllers";

// Iniciar el servidor
const app = new Hono();

// Rutas
app.get("/users", getAll);

export default app;
