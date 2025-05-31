import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('menuBtn') menuBtnRef!: ElementRef;
  sidebarOpen = false;
  loggedIn = true;
  excludeTargets: HTMLElement[] = [];

  ngAfterViewInit() {
    if (this.menuBtnRef) {
      this.excludeTargets = [this.menuBtnRef.nativeElement];
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebarOnNavigate() {
    if (window.innerWidth < 768) {
      this.sidebarOpen = false;
    }
  }

  closeSidebarOnOutsideClick() {
    if (window.innerWidth < 768) {
      this.sidebarOpen = false;
    }
  }
}
