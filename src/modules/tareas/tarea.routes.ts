import { Router } from "express";
import { tareaService } from "./tarea.service";

const router = Router();

router.get("/", (req, res) => {
  res.json(tareaService.getAll());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarea = tareaService.getById(id);

  if (!tarea) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  res.json(tarea);
});

router.post("/", (req, res) => {
  const nueva = tareaService.create(req.body);
  res.status(201).json(nueva);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const actualizada = tareaService.update(id, req.body);

  if (!actualizada) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  res.json(actualizada);
});


router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const eliminado = tareaService.delete(id);

  if (!eliminado) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  res.json({ message: "Tarea eliminada correctamente" });
});

export default router;
