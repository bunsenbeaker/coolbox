import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'connected-divs';
  public boxesContent = [
    'aaaaaaaaa',
    'bbb',
    'cccccccccccccc',
    'dddddddddddddddddddddddddddddddddddddddddddddddddd',
    'eeeee',
    'ff'
  ];
}
