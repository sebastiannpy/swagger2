import { Router } from "express";
import { proyectoService } from "./proyecto.service";

const router = Router();

router.get("/", (req, res) => {
  const proyectos = proyectoService.getAll();
  res.json(proyectos);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const proyecto = proyectoService.getById(id);

  if (!proyecto) {
    return res.status(404).json({ message: "Proyecto no encontrado" });
  }

  res.json(proyecto);
});

router.post("/", (req, res) => {
  const nuevo = proyectoService.create(req.body);
  res.status(201).json(nuevo);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const proyectoActualizado = proyectoService.update(id, req.body);

  if (!proyectoActualizado) {
    return res.status(404).json({ message: "Proyecto no encontrado" });
  }

  res.json(proyectoActualizado);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const eliminado = proyectoService.delete(id);

  if (!eliminado) {
    return res.status(404).json({ message: "Proyecto no encontrado" });
  }

  res.json({ message: "Proyecto eliminado correctamente" });
});

export default router;
