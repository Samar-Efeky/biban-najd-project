import {
  Component,
  HostListener,
  OnDestroy,
  inject,
  signal
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-public-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './public-navbar.html',
  styleUrls: ['./public-navbar.scss']
})
export class PublicNavbar implements OnDestroy {
  sidebarOpen = false;
  scrolled = false;

  private destroy$ = new Subject<void>();
  private scrollHandler: any;

  constructor() {
    // 🧹 تحويل HostListener إلى eventListener يمكن تدميره
    this.scrollHandler = () => this.onScroll();
    window.addEventListener('scroll', this.scrollHandler);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 600;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {

    // 🧹 Clean RxJS
    this.destroy$.next();
    this.destroy$.complete();

    // 🧹 Clean HostListener manually
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }

  }
}
