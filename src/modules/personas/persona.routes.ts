import { Router } from "express";
import { personaService } from "./persona.service";

const router = Router();

router.get("/", (req, res) => {
  res.json(personaService.getAll());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const persona = personaService.getById(id);

  if (!persona) {
    return res.status(404).json({ message: "Persona no encontrada" });
  }

  res.json(persona);
});

router.post("/", (req, res) => {
  const nueva = personaService.create(req.body);
  res.status(201).json(nueva);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const actualizada = personaService.update(id, req.body);

  if (!actualizada) {
    return res.status(404).json({ message: "Persona no encontrada" });
  }

  res.json(actualizada);
});


router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const eliminado = personaService.delete(id);

  if (!eliminado) {
    return res.status(404).json({ message: "Persona no encontrada" });
  }

  res.json({ message: "Persona eliminada correctamente" });
});

export default router;
