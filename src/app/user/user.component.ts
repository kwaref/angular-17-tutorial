import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  template: `
    Username: {{ username }}
    <p>The user's name is {{ name }}</p>
    @if (isDev) {
      is a developer
    } @else {
      is not a developer
    }
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  styles: ``
})
export class UserComponent {
  username = 'youngTech';
  @Input() name = '';
  @Input() isDev = false;
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  favoriteFramework = 'React';
  showFramework() {
    alert(this.favoriteFramework)
  }
}
