import { Component, Inject, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButton, MatDialogClose, MatDialogTitle],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.scss'
})
export class DialogDeleteComponent {
  private _dialogRef = inject(MatDialogRef<DialogDeleteComponent>);
  private _taskService = inject(TasksService);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      taskId: number,
      refreshTask: () => void;
    }
  ) {}


  deleteTask(): void {
    const taskId: number = this.data.taskId;

    if (!taskId) return;

    this._taskService.deleteTask(taskId).subscribe({
      next: () => {
        console.log('Task deleted successfully');
        this.data.refreshTask();
        this._dialogRef.close();
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      }
    });

  }


}
