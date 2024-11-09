import { Component, Input } from '@angular/core';
import { CatalogItem } from '../../../shared/models/item-base.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: CatalogItem;
  selectedColorIndex = 0;
  showModal = false;
  initialSlideIndex = 0;

  openModal(imageIndex: number) {
    this.initialSlideIndex = imageIndex;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  selectColor(index: number): void {
    this.selectedColorIndex = index;
  }
}
