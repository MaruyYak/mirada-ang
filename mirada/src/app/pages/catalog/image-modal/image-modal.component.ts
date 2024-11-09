import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})

export class ImageModalComponent {
  @Input() images: string[] = [];
  @Input() name: string = '';
  @Input() initialSlide: number = 0;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;

  // ngOnDestroy(): void {
  //   document.body.style.overflow = '';
  // }

  ngOnInit(): void {
    // document.body.style.overflow = 'hidden';
    const swiperOptions: SwiperOptions = {
      initialSlide: this.initialSlide,
    };
    Object.assign(this.swiperContainer.nativeElement, swiperOptions);
    this.swiperContainer.nativeElement.initialize();
  }

  close() {
    this.closeModalEvent.emit();
  }

  closeModalOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.close();
    }
  }
}
