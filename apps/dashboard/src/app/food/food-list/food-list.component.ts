import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '@taco-bell/api-interfaces';

@Component({
  selector: 'taco-bell-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})

export class FoodListComponent {
  @Input() foods: Food[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
