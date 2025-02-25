import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDefaultComponent } from './components/button-default/button-default.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'materias-frontend';
}
