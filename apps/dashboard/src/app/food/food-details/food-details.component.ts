import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Food } from '@taco-bell/api-interfaces';


@Component({
  selector: 'taco-bell-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent{
  currentFood: Food;
  originalTitle: string;

@Output() saved = new EventEmitter();
@Output() cancelled = new EventEmitter();
@Input() set food(value) {
  if (value) this.originalTitle = value.name;
  this.currentFood = {...value}
}

@Input() form: FormGroup;

save(formDirective: FormGroupDirective) {
  this.saved.emit(formDirective.value);
  formDirective.resetForm();
}
cancel() {
  this.cancelled.emit();
}
}


