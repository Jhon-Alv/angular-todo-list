import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { Task } from '../../model/Task';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatIcon, DatePipe, MatMiniFabButton],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  _taskService = inject(TasksService);

  @Input() task?: Task;
  @Output() taskDeleted = new EventEmitter<void>();

  public taskDate: string = '';

  editTask(){
    console.log('Edit task with id:', this.task?.id);
    // Logic to edit the task goes here
  }

  deleteTask(): void{

    if (!this.task?.id) return;
    this._taskService.deleteTask(this.task.id).subscribe({
      next: () => {
        console.log('Task deleted successfully');
        this.taskDeleted.emit();
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      }
    });

  }

}
