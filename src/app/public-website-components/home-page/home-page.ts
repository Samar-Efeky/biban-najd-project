import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";
import { HomeAboutSection } from "../home-about-section/home-about-section";
import { HomeWorkFields } from "../home-work-fields/home-work-fields";
import { HomeServices } from '../home-services/home-services';
import { HomeProjects } from "../home-projects/home-projects";
import { OurGoals } from "../our-goals/our-goals";
import { HomeContact } from "../home-contact/home-contact";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, HomeAboutSection, HomeWorkFields, HomeServices, HomeProjects, OurGoals, HomeContact],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
