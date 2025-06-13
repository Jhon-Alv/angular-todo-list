import { Component, Inject, inject } from '@angular/core';
import { MatCard, MatCardActions, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { TasksService } from '../../services/tasks.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-dialog-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatSelectModule, MatCardHeader, MatCardTitle, MatCardActions, MatButton, MatFormFieldModule, MatInputModule, MatDialogClose],
  templateUrl: './dialog-edit.component.html',
  styleUrl: './dialog-edit.component.scss'
})
export class DialogEditComponent {

  private _dialogRef = inject(MatDialogRef<DialogEditComponent>);
  private _taskService = inject(TasksService);
  private fb = inject(FormBuilder);

  taskForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      task: Task,
      refreshTask: () => void;
    }
  ) {
    this.taskForm = this.fb.group({
      title: [data.task.title, Validators.required],
      description: [data.task.description],
      state: [data.task.state, Validators.required],
    });
  }


  editTask() {
    const task = this.data.task;

    if (!task.id) return;
    
    task.title = this.taskForm.value.title;
    task.description = this.taskForm.value.description;
    task.state = this.taskForm.value.state;

    this._taskService.updateTask(task, task.id).subscribe({
      
      next: () => {
        console.log('Task updated successfully');
        this.data.refreshTask();
        this._dialogRef.close();

      },
      error: (error) => {
        console.error('Error updating task:', error);
      }

    })
  }


}
