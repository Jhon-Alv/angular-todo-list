import { Component, inject } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { State, Task } from '../../model/Task';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  public pendienteTaskList: Task[] = [];
  public progresoTaskList: Task[] = [];
  public completoTaskList: Task[] = [];

  public _taskService: TasksService = inject(TasksService);

  constructor() {

    this._taskService.getTasks().subscribe({
      next: (tasks) => {

        tasks.filter(task => task.state === State.pendiente).forEach(task => {
          this.pendienteTaskList.push(task);
        });

        tasks.filter(task => task.state === State.progreso).forEach(task => {
          this.progresoTaskList.push(task);
        });

        tasks.filter(task => task.state === State.completado).forEach(task => {
          this.completoTaskList.push(task);
        });

        console.log(this.pendienteTaskList);
        console.log(this.progresoTaskList);
        console.log(this.completoTaskList);

      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });

  }

}
