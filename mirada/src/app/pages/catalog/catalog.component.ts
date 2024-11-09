import { Component, OnInit } from '@angular/core';
import { CatalogData } from '../../shared/catalog-base/items-base';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  catalog = CatalogData;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
