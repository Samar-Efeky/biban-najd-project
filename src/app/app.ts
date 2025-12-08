import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavbar } from "./public-website-components/public-navbar/public-navbar";
import { Footer } from './public-website-components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [ PublicNavbar, RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Biban-najd');
}
