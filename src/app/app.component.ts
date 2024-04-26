import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ChildComponent,
    CommentsComponent,
    RouterLink,
    ReactiveFormsModule,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe
  ],
  // template: `
  // <section><app-user name="Karel Rodríguez" [isDev]="true"/></section>
  // @if (isServerRunning) {
  //   Yes, the server is running
  // } @else {
  //   No, the server is not running
  // }
  // @for (user of users; track user.id) {
  //   <p>{{ user.name }}</p>
  // }
  // <div [contentEditable]="isEditable"></div>
  // <section (mouseover)="onMouseOver()">
  //   There's a secret message for you, hover to reveal 👀
  //   {{ message }}
  // </section>
  // <app-child (addItemEvent)="addItem($event)"/>
  // <p>🐢 all the way down {{ items.length }}</p>
  // <div>
  //   <h1>How I feel about Angular</h1>
  //   <article>
  //     <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  //     <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  //     <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  //     <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
  //     <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
  //     <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
  //   </article>
  //   @defer (on viewport) {
  //     <comments />
  //   } @placeholder {
  //     <p>Future comments</p>
  //   } @loading (minimum 2s) {
  //     <p>Loading comments...</p>
  //   }
  // </div>
  // `,
  templateUrl: 'app.component.html',
  styles: `
  :host {
    color: #a144eb;
  }
  `
})
export class AppComponent {
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
  display = '';
  city = 'Lisboa';
  isServerRunning = true;
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }];
  isEditable = true;
  message = '';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }

  // carService = inject(CarService);
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';
}
