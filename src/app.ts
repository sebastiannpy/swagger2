import express from "express";
import swaggerUi from "swagger-ui-express";


import personaRoutes from "./modules/personas/persona.routes";
import proyectoRoutes from "./modules/proyectos/proyecto.routes";
import tareaRoutes from "./modules/tareas/tarea.routes";


import swaggerDocument from "./swagger/swagger.config";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use("/personas", personaRoutes);
app.use("/proyectos", proyectoRoutes);
app.use("/tareas", tareaRoutes);

export default app;
