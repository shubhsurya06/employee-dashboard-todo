import { Component, signal } from '@angular/core';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  providers: [Header]
})
export class App {
  protected readonly title = signal('employee-dashboard-todo');

}
