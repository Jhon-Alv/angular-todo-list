import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
