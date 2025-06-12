import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatSelectModule, MatCard, MatCardHeader, MatCardTitle, MatCardActions, MatButton, MatFormFieldModule, MatInputModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  private _taskService = inject(TasksService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  taskForm: FormGroup;

  constructor() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      state: ['pendiente', Validators.required],
    });
  }

  onSubmit(): void {

    if (this.taskForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const task: Task = this.taskForm.value;
    
  
    this._taskService.createTask(task).subscribe({
      next: (response) => {
        console.log('Task created successfully:', response);
        this.router.navigate(['/tasks']);
      }
      , error: (error) => {
        console.error('Error creating task:', error);
      }
    })


    console.log('Form submitted:', this.taskForm.value);
  }

}
