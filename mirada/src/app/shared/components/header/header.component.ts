import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isPageOpen: boolean = false;
  isDarkText: boolean = false;
  showLogo: boolean = false;
  activeUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateStyles(event.urlAfterRedirects);
        this.showLogo = event.urlAfterRedirects === '/catalog';
      }
    });
  }

  private updateStyles(url: string): void {
    this.isDarkText = url.includes('/catalog');
    this.activeUrl = url;
    this.isPageOpen = this.activeUrl === url;
  }

  isActive(url: string): boolean {
    return this.activeUrl === url;
  }
}
