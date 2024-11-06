import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-cards',
  templateUrl: './preview-cards.component.html',
  styleUrl: './preview-cards.component.scss'
})
export class PreviewCardsComponent {
  cards = [
    '../../../../assets/1.JPG',
    '../../../../assets/3.JPG',
    '../../../../assets/2.JPG',
    '../../../../assets/4.JPG',
 ];

}
