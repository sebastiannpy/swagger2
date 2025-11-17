import {
  Persona,
  CreatePersonaDto,
  UpdatePersonaDto,
} from "./persona.model";

const personas: Persona[] = [];
let currentId = 1;

class PersonaService {
  getAll(): Persona[] {
    return personas;
  }

  getById(id: number): Persona | undefined {
    return personas.find((p) => p.id === id);
  }

  create(data: CreatePersonaDto): Persona {
    const nueva: Persona = {
      id: currentId++,
      nombre: data.nombre,
      edad: data.edad,
      email: data.email,
    };

    personas.push(nueva);
    return nueva;
  }

  update(id: number, data: UpdatePersonaDto): Persona | null {
    const persona = this.getById(id);
    if (!persona) return null;

    if (data.nombre !== undefined) persona.nombre = data.nombre;
    if (data.edad !== undefined) persona.edad = data.edad;
    if (data.email !== undefined) persona.email = data.email;

    return persona;
  }

  delete(id: number): boolean {
    const index = personas.findIndex((p) => p.id === id);
    if (index === -1) return false;

    personas.splice(index, 1);
    return true;
  }
}

export const personaService = new PersonaService();
