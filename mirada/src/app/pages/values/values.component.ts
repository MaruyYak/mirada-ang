import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})

export class ValuesComponent implements OnInit {
  values: { 
    image: string, 
    text: string, 
  }[] = [];

  fabrics: { 
    image: string, 
    alt: string, 
  }[] = [];

  ngOnInit(): void {
    this.loadvalues();
    this.loadfabric();
  }

  loadvalues(): void {
    this.values = [
      {
        image: '/assets/values/val_1.png',
        text: 'Доверяем своему внутреннему ориентиру и создаём новую реальность.',
      },
      {
        image: '/assets/values/val_2.png',
        text: 'Управляем своим внутреннем состоянием и помогаем в этом нашим доверителям.',
      },
      {
        image: '/assets/values/val_3.png',
        text: 'Прозрачность и чистота во всех аспектах: мыслях, действиях и качестве продукции.',
      },
      {
        image: '/assets/values/val_4.png',
        text: 'Культура, основанная на взаимопонимании и поддержке как внутри команды, так и среди клиентов.',
      },
    ];
  }

  loadfabric(): void {
    this.fabrics = [
      {
        image: '/assets/values/fabric_1.jpg',
        alt: '1dress',
      },
      {
        image: '/assets/values/fabric_2.jpg',
        alt: 'tailor',
      },
      {
        image: '/assets/values/fabric_3.jpg',
        alt: 'mirada brend',
      },
      {
        image: '/assets/values/fabric_4.jpg',
        alt: 'threads',
      },
    ];
  }
}
