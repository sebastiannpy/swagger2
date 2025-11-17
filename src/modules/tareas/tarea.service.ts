import {
  Tarea,
  TaskStatus,
  CreateTareaDto,
  UpdateTareaDto,
} from "./tarea.model";

const tareas: Tarea[] = [];
let currentId = 1;

class TareaService {
  getAll(): Tarea[] {
    return tareas;
  }

  getById(id: number): Tarea | undefined {
    return tareas.find((t) => t.id === id);
  }

  create(data: CreateTareaDto): Tarea {
    const nueva: Tarea = {
      id: currentId++,
      proyectoId: data.proyectoId,
      titulo: data.titulo,
      descripcion: data.descripcion,
      estado: "todo",
    };

    tareas.push(nueva);
    return nueva;
  }

  update(id: number, data: UpdateTareaDto): Tarea | null {
    const tarea = this.getById(id);
    if (!tarea) return null;

    if (data.proyectoId !== undefined) tarea.proyectoId = data.proyectoId;
    if (data.titulo !== undefined) tarea.titulo = data.titulo;
    if (data.descripcion !== undefined) tarea.descripcion = data.descripcion;
    if (data.estado !== undefined) tarea.estado = data.estado;

    return tarea;
  }

  delete(id: number): boolean {
    const index = tareas.findIndex((t) => t.id === id);
    if (index === -1) return false;

    tareas.splice(index, 1);
    return true;
  }

  isValidStatus(status: string): status is TaskStatus {
    return status === "todo" || status === "doing" || status === "done";
  }
}

export const tareaService = new TareaService();
