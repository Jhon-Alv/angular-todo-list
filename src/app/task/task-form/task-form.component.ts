import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardHeader, MatCardTitle } from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [RouterLink, MatSelectModule, MatCard, MatCardHeader, MatCardTitle, MatCardActions, MatButton, MatFormFieldModule, MatInputModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

}
