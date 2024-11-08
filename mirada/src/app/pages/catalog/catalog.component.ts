import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // handleFilters(filters: { categories: string[]; colors: string[]; maxPrice: number }) {
  //   // Логика применения фильтров на массиве cardItems или для отображения отфильтрованных результатов
  // }
}
