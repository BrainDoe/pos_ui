import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { UtilsService } from '../../../core/services/utils.service';
import { AsyncPipe } from '@angular/common';
import { navigationMenu } from '../../../core/constants/sidenav.constant';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-sidebar',
  imports: [ClickOutsideDirective, AsyncPipe, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  productService = inject(ProductService);
  @ViewChild('menuBtn') menuBtnRef!: ElementRef;
  sidebarOpen = false;
  loggedIn = true;
  excludeTargets: HTMLElement[] = [];
  sideNavItems = navigationMenu;
  invoiceCount = this.productService.invoiceItemCount;

  constructor(public utilService: UtilsService) {}

  isOpen = false;
  // ngOnInit() {
  //   this.utilService.sidebarOpen$.subscribe((isOpen) => {
  //     this.isOpen = isOpen;
  //   });
  // }

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
      // this.sidebarOpen = false;
      this.utilService.toggleSidebar();
    }
  }

  closeSidebarOnOutsideClick() {
    if (window.innerWidth < 768) {
      this.sidebarOpen = false;
      // this.utilService.toggleSidebar();
    }
  }
}
