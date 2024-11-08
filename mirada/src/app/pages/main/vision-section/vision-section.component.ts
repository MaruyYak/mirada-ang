import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-section',
  templateUrl: './vision-section.component.html',
  styleUrl: './vision-section.component.scss'
})

export class VisionSectionComponent implements OnInit {

  visionCards: { 
    image: string, 
    title: string,
    description: string, 
  }[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadVisionCards();
  }

  loadVisionCards(): void {
    this.visionCards = [
      { 
        image: '/assets/desc_2.JPG',
        title: 'Топ ACTUAL',
        description: 'MIRADA – это про настроение и состояние души, гармонирующее с природными, стихийными, животными и женскими энергиями мира.',
      },
      { 
        image: '/assets/desc_1.JPG',
        title: 'Юбка ARABIC',
        description: 'Будь то танцевальное выступление, работа или вечерний выход, наши коллекции подчеркнут вашу индивидуальность и изысканность.',
      },
      { 
        image: '/assets/desc_3.JPG',
        title: 'Топ ACTUAL',
        description: 'Наши модели универсальны, идеально подходя как для повседневной жизни, так и для особых мероприятий.',
      },
    ];
  }
}
