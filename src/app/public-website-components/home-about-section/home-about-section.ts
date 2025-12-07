import { Component } from '@angular/core';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-home-about-section',
  standalone:true,
  imports: [InViewDirective],
templateUrl: './home-about-section.html',
  styleUrl: './home-about-section.scss',
})
export class HomeAboutSection {

}
