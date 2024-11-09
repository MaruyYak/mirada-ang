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

  constructor() {}

  ngOnInit(): void {}

  selectColor(index: number): void {
    this.selectedColorIndex = index;
  }
}
