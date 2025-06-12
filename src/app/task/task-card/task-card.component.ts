import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { Task } from '../../model/Task';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatIcon, DatePipe, MatMiniFabButton],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  @Input() task?: Task;

  public taskDate: string = '';

  editTask(){
    console.log('Edit task with id:', this.task?.id);
    // Logic to edit the task goes here
  }

  deleteTask(){
    console.log('Delete task with id:', this.task?.id);
    // Logic to delete the task goes here
  }

}
