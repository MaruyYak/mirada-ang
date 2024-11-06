import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() link: string = '';

  @Input() content: string = '';

  @Input() disabled: boolean = false;

  get buttonClass() {
    return `btn-${this.size}`;
  }
}
