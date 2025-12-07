import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
