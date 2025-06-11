export enum State {
    progreso = 'progreso',
    completado = 'completado',
    pendiente = 'pendiente',
}

export interface Task {
    id?: number;
    title: string;
    description: string;
    state: State;
    created_date?: string;
}