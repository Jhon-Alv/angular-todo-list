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

  public taskList: Task[] = [];

  public _taskService: TasksService = inject(TasksService);

  constructor() {

    this._taskService.getTasks().subscribe({
      next: (tasks) => {

        this.taskList = tasks;
        console.log(this.taskList);
                
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });

  }

}
