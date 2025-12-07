import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";
import { HomeAboutSection } from "../home-about-section/home-about-section";
import { HomeWorkFields } from "../home-work-fields/home-work-fields";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, HomeAboutSection, HomeWorkFields],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
