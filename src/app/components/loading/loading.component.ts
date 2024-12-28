import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  text = 'Somethingg is coming'.split('').map(char => char === ' ' ? '\u00A0' : char);
}
