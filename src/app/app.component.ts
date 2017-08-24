import { Component } from '@angular/core';
import { IPerson } from './IPerson';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string;

  constructor() {
    this.name = 'Skeleton'
  }
}