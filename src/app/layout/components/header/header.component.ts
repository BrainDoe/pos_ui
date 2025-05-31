import { Component, input, output, signal } from '@angular/core';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  loggedIn = input.required({ transform: () => true });
  sidebarToggle = output();
  sidebarOpen = signal(false);

  constructor(private utilService: UtilsService) {}

  toggleSidebar() {
    this.utilService.toggleSidebar();
  }

  // toggleSidebar() {
  //   this.sidebarOpen.set(!this.sidebarOpen());
  // }
}
