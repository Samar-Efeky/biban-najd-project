import { Component } from '@angular/core';

@Component({
  selector: 'app-home-services',
  imports: [],
  templateUrl: './home-services.html',
  styleUrl: './home-services.scss',
})
export class HomeServices {
  services=[
    {
      image:'assets/services/service1.jpeg',
      title:'المقاولات العامة'
    },
     {
      image:'assets/services/service2.jpeg',
      title:'ساس الوشم للحدادة'
    }, {
      image:'assets/services/service3.jpeg',
      title:'الاخشاب'
    }, {
      image:'assets/services/service4.jpeg',
      title:'ساس الوشم لتجارة المعادن (السكراب)'
    },
  ]
}
