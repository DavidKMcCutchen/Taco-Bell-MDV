import { Component } from '@angular/core';

@Component({
  selector: 'taco-bell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Taco Bell Menu';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'foods', icon: 'view_list', title: 'Food'}
  ]
}
