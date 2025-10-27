import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  providers: [Header, RouterOutlet]
})
export class App {
  

}
