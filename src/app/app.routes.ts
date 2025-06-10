import { Routes } from '@angular/router';
import path from 'path';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

export const routes: Routes = [
    {path: 'tasks', loadComponent: () => import('./task/task-list/task-list.component').then(m => m.TaskListComponent)},
    {path: 'form', loadComponent: () => import('./task/task-form/task-form.component').then(m => m.TaskFormComponent)},
    {path: '**', redirectTo: '/tasks', pathMatch: 'full'},

];
