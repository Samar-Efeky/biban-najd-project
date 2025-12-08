import { Component } from '@angular/core';
@Component({
  selector: 'app-home-projects',
  imports: [],
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.scss',
})
export class HomeProjects {
  projects=[
    {
      id:1,
      image:'assets/projects/project1.jpg',
      title:'بناء الفلل',
      category:'المقاولات العامة',
      date:'تم تنفيذة'
    },
    {
      id:2,
      image:'assets/projects/project2.jpg',
      title:'الاخشاب',
      category:'الاخشاب',
      date:'جاري التنفيذ'
    },{
      id:3,
      image:'assets/projects/project3.jpeg',
      title:'الاخشاب',
      category:'الاخشاب',
      date:'تم تنفيذة'
    },{
      id:4,
      image:'assets/projects/project4.jpeg',
      title:'هدم وإزالة الهياكل',
      category:'تجارة المعادن (السكراب)',
      date:'جاري التنفيذ'
    },
  ]
}
