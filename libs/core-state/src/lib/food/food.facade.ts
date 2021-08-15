import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, State, Store } from "@ngrx/store";
import { Food } from "@taco-bell/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as FoodActions from './food.actions';
import * as FoodSelectors from './food.selectors';
import * as fromFood from './food.reducer';

@Injectable({
    providedIn: 'root',
})

export class FoodFacade {
    allFoods$ = this.store.pipe(
        map((state) => FoodSelectors.getAllFoods(state)),
    )
    selectedFoods$ = this.store.pipe(select(FoodSelectors.getSelectedFood));
    loaded$ = this.store.pipe(select(FoodSelectors.getFoodsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === FoodActions.createFood({} as any) .type ||
        action.type === FoodActions.updateFood({} as any) .type ||
        action.type === FoodActions.deleteFood({} as any) .type 
        ),
    )
    
    selectFood(foodId: string) {
        this.dispatch(FoodActions.selectFood({ foodId }))
    };

    loadFoods() {
        this.dispatch(FoodActions.loadFoods())
    };

    loadFood(foodId: string) {
        this.dispatch(FoodActions.loadFood({ foodId} ))
    };

    saveFood(food: Food) {
        food.id ? this.updateFood(food) : this.createFood(food)
    };

    createFood(food: Food) {
        this.dispatch(FoodActions.createFood({ food }))
    };

    updateFood(food: Food) {
        this.dispatch(FoodActions.updateFood({ food }))
    };

    deleteFood(food: Food) {
        this.dispatch(FoodActions.deleteFood({ food }))
    };

    dispatch(action: Action) {
        this.store.dispatch(action)
    };

    constructor(
        private store: Store<fromFood.FoodPartialState>,
        private actions$: ActionsSubject
    ) {}

}