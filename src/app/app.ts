import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavbar } from "./public-website-components/public-navbar/public-navbar";

@Component({
  selector: 'app-root',
  imports: [ PublicNavbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Biban-najd');
}
