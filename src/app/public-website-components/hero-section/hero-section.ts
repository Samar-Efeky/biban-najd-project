import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  NgZone,
  OnDestroy
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements AfterViewInit, OnDestroy {

  slides = [
    {
      image: 'assets/img1.jpg',
      title: 'بيبان نجد للمقاولات العامة',
      subtitle: 'نبني مستقبلك بأيدٍ محترفة',
      desc: 'تقدم خدمات مقاولات متكاملة بأعلى معايير الجودة لتحقيق تطلعاتكم'
    },
    {
      image: 'assets/img2.jpeg',
      title: 'نحو بناء حديث ومتطور',
      subtitle: 'نحو رؤية عمرانية ترسم المستقبل'
    },
    {
      image: 'assets/img3.jpg',
      title: 'جودة تضمن مستقبلك',
      subtitle: 'احترافية والتزام ومواعيد دقيقة',
      desc: 'نقدم خبرة طويلة مع أفضل فريق هندسي'
    }
  ];

  slices = 8;
  currentIndex = 0;
  intervalMs = 5000;

  @ViewChildren('slice') sliceElements!: QueryList<ElementRef>;
  private timerId: any;
  private resizeHandler!: () => void;
  private activeTimeline: any;

  constructor(private ngZone: NgZone) {
    this.updateSlices();
    
    this.resizeHandler = () => this.updateSlices();
    window.addEventListener('resize', this.resizeHandler);
  }

  updateSlices() {
    const width = window.innerWidth;

    if (width >= 1600) this.slices = 8;
    else if (width >= 1200) this.slices = 6;
    else if (width >= 992) this.slices = 5;
    else if (width >= 768) this.slices = 4;
    else if (width >= 600) this.slices = 3;
    else this.slices = 2;
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.prepareSlices();

      setTimeout(() => this.playTo(this.currentIndex), 120);

      this.timerId = setInterval(() => this.nextSlide(), this.intervalMs);
    });
  }

  prepareSlices() {
    const all = this.sliceElements.toArray();

    all.forEach(sliceEl => {
      const el = sliceEl.nativeElement as HTMLElement;
      el.style.transform = 'translate3d(0,0,0)';
      el.style.opacity = '0';
      el.style.willChange = 'transform, opacity';
    });

    const firstSlices = all.slice(0, this.slices);
    firstSlices.forEach(s => s.nativeElement.style.opacity = '1');
  }

  playTo(index: number) {
    if (this.activeTimeline) this.activeTimeline.kill();

    const allSlices = this.sliceElements.toArray();
    const timeline = gsap.timeline();
    this.activeTimeline = timeline;

    const incomingStart = window.innerHeight * 0.8;

    for (let si = 0; si < this.slices; si++) {
      const sliceIndex = index * this.slices + si;
      const el = allSlices[sliceIndex]?.nativeElement;
      if (!el) continue;

      timeline.fromTo(
        el,
        { y: incomingStart, opacity: 0, scale: 1.05 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out', delay: si * 0.08 },
        0
      );
    }

    const prevIndex = (index - 1 + this.slides.length) % this.slides.length;
    for (let si = 0; si < this.slices; si++) {
      const sliceIndex = prevIndex * this.slices + si;
      const el = allSlices[sliceIndex]?.nativeElement;
      if (!el) continue;

      timeline.to(
        el,
        { opacity: 0, duration: 0.5, ease: 'power2.in' },
        0
      );
    }
  }

  nextSlide() {
    this.ngZone.run(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    });
    this.playTo(this.currentIndex);
  }

  goTo(i: number) {
    if (i === this.currentIndex) return;

    this.ngZone.run(() => {
      this.currentIndex = i;
    });

    this.playTo(i);

    clearInterval(this.timerId);
    this.timerId = setInterval(() => this.nextSlide(), this.intervalMs);
  }

  // 🔥🔥 Cleanup كامل بدون ترك أي Memory Leak 🔥🔥
  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    if (this.activeTimeline) {
      this.activeTimeline.kill();
      this.activeTimeline = null;
    }

    window.removeEventListener('resize', this.resizeHandler);
    this.resizeHandler = null!;

    if (this.sliceElements) {
      this.sliceElements.reset([]);
    }
  }
}
