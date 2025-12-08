import { Component } from '@angular/core';
import { InViewDirective } from "../../directives/in-view.directive";

@Component({
  selector: 'app-home-contact',
  imports: [InViewDirective],
  templateUrl: './home-contact.html',
  styleUrl: './home-contact.scss',
})
export class HomeContact {

}
