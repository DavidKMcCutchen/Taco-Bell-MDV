import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Food, emptyFood } from '@taco-bell/api-interfaces';
import { FoodFacade } from '@taco-bell/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'taco-bell-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  allFoods$: Observable<Food[]> = this.foodFacade.allFoods$;
  selectedFood$: Observable<Food> = this.foodFacade.selectedFoods$

  form: FormGroup;

  constructor(
    private foodFacade: FoodFacade,
    private formBuilder: FormBuilder) 
    {
      this.foodFacade.mutations$.subscribe((_) => this.resetFood())
    }

  ngOnInit() {
    this.initForm();
    this.foodFacade.loadFoods();
    this.resetFood();
  }

  selectFood(food: Food) {
    this.foodFacade.selectFood(food.id)
    this.form.patchValue(food)
  };

  saveFood(food: Food) {
    this.foodFacade.saveFood(food)
  };

  deleteFood(food: Food) {
    this.foodFacade.deleteFood(food)
  };

  resetFood() {
    this.form.reset();
    this.selectFood(emptyFood)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      price: [''],
      description: ['']
    })
  }
}
