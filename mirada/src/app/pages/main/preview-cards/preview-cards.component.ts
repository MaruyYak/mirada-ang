import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-preview-cards',
  templateUrl: './preview-cards.component.html',
  styleUrl: './preview-cards.component.scss'
})
export class PreviewCardsComponent {
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
  
  cards = [
    '../../../../assets/1.jpg',
    '../../../../assets/2.jpg',
    '../../../../assets/4.jpg',
    '../../../../assets/3.jpg',
 ];

}
