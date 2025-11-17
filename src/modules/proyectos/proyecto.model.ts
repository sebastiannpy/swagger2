export interface Proyecto {
  id: number;
  nombre: string;
  descripcion?: string;
}

export interface CreateProyectoDto {
  nombre: string;
  descripcion?: string;
}

export interface UpdateProyectoDto {
  nombre?: string;
  descripcion?: string;
}
