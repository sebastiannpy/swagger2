export type TaskStatus = "todo" | "doing" | "done";

export interface Tarea {
  id: number;
  proyectoId: number; 
  titulo: string;
  descripcion?: string;
  estado: TaskStatus;
}

export interface CreateTareaDto {
  proyectoId: number;
  titulo: string;
  descripcion?: string;
}

export interface UpdateTareaDto {
  proyectoId?: number;
  titulo?: string;
  descripcion?: string;
  estado?: TaskStatus;
}
