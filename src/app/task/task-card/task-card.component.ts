import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { Task } from '../../model/Task';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../dialog/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../../dialog/dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatIcon, DatePipe, MatMiniFabButton, MatButtonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  readonly _dialogRef = inject(MatDialog);

  @Input() task?: Task;
  @Output() refreshTask = new EventEmitter<void>();

  openEditDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    if(!this.task) return;

    this._dialogRef.open(DialogEditComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        task: this.task,
        refreshTask: () => {
          this.refreshTask.emit();
        }
      }
    });
  }

  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    if (!this.task?.id) return;
    this._dialogRef.open(DialogDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        taskId: this.task.id,
        refreshTask: () => {
          this.refreshTask.emit();
        }
      }
    });

    /*
    this._dialogRef.afterAllClosed.subscribe(res => {
      console.log('Dialog closed with result:', res);
      this.taskDeleted.emit();
    });
    */
  }

  

}

