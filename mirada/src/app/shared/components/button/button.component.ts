import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() link = '';

  @Input() content = '';

  @Input() disabled = false;

  get buttonClass() {
    return `btn-${this.size}`;
  }
}
