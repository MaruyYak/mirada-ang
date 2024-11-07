import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-cards',
  templateUrl: './preview-cards.component.html',
  styleUrl: './preview-cards.component.scss'
})
export class PreviewCardsComponent {
  cards = [
    '../../../../assets/1.jpg',
    '../../../../assets/2.jpg',
    '../../../../assets/4.jpg',
    '../../../../assets/3.jpg',
 ];

}
