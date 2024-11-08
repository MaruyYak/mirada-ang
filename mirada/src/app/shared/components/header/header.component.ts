import { Component, HostListener, Input } from '@angular/core';
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
  isMobile: boolean = window.innerWidth <= 768;
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateStyles(event.urlAfterRedirects);
        this.showLogo = event.urlAfterRedirects != '/';
      }
    });
  }

  private updateStyles(url: string): void {
    this.isDarkText = url.includes('/catalog') || url.includes('/vision-values');
    this.activeUrl = url;
    this.isPageOpen = this.activeUrl === url;
  }

  isActive(url: string): boolean {
    return this.activeUrl === url;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
