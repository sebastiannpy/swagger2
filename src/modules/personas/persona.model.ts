export interface Persona {
  id: number;
  nombre: string;
  edad?: number;
  email?: string;
}

export interface CreatePersonaDto {
  nombre: string;
  edad?: number;
  email?: string;
}

export interface UpdatePersonaDto {
  nombre?: string;
  edad?: number;
  email?: string;
}
