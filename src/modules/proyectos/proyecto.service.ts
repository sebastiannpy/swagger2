import {
  Proyecto,
  CreateProyectoDto,
  UpdateProyectoDto,
} from "./proyecto.model";

const proyectos: Proyecto[] = [];
let currentId = 1;

class ProyectoService {
  getAll(): Proyecto[] {
    return proyectos;
  }

  getById(id: number): Proyecto | undefined {
    return proyectos.find((p) => p.id === id);
  }

  create(data: CreateProyectoDto): Proyecto {
    const nuevo: Proyecto = {
      id: currentId++,
      nombre: data.nombre,
      descripcion: data.descripcion,
    };

    proyectos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: UpdateProyectoDto): Proyecto | null {
    const proyecto = this.getById(id);
    if (!proyecto) return null;

    if (data.nombre !== undefined) proyecto.nombre = data.nombre;
    if (data.descripcion !== undefined) proyecto.descripcion = data.descripcion;

    return proyecto;
  }

  delete(id: number): boolean {
    const index = proyectos.findIndex((p) => p.id === id);
    if (index === -1) return false;

    proyectos.splice(index, 1);
    return true;
  }
}

export const proyectoService = new ProyectoService();
