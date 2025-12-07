import { Component } from '@angular/core';
import { InViewDirective } from "../../directives/in-view.directive";

@Component({
  selector: 'app-home-work-fields',
  imports: [InViewDirective],
  templateUrl: './home-work-fields.html',
  styleUrl: './home-work-fields.scss',
})
export class HomeWorkFields {
  ourServices=[
    {
      id:1,
      icon:'fa-regular fa-building',
      title:'المقاولات العامة',
      list:['الإنشاءات العامة',
        'التشطيب الداخلي والخارجي',
        'أعمال الكهرباء والسباكة',
        'الحدادة والنجارة',
        'تنسيق المواقع',
        'إدارة المشاريع'
      ]
    },
     {
      id:2,
      icon:'fa-solid fa-hammer',
      title:'ساس الوشم للحدادة',
      list:['الهياكل الحديدية',
        'الأبواب والشبابيك الحديدية',
        'الدرابزين والسلالم',
        'الشبوك والأسوار',
        'المظلات والسواتر',
        'أعمال الليزر والديكور',
        'توريد وتركيب الحديد'
      ]
    },
     {
      id:3,
      icon:'fa-regular fa-truck',
      title:'ساس الوشم لتجارة المعادن (السكراب)',
      list:['شراء جميع أنواع المعادن',
        'استلام ونقل السكراب',
        'هدم وإزالة الهياكل',
        'الوزن والتقييم',
        'التجارة بالكميات الكبيرة'
      ]
    },
    {
      id:4,
      icon:'fa-solid fa-tree',
      title:'الأخشاب',
      list:['تصنيع وتركيب الأثاث الخشبي',
        'النجارة الداخلية والخارجية',
        'أبواب خشبية',
        'شبابيك خشبية',
        'تركيب وتثبيت الأخشاب في المشاريع السكنية والتجارية'
      ]
    },
  ];

}
