import { Injectable } from "@angular/core";
import { Food } from "@taco-bell/api-interfaces";
import { FoodService } from "@taco-bell/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as FoodActions from './food.actions';
import { filter, map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class FoodEffects {
    loadFood$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FoodActions.loadFood),
        fetch({
            run: (action) =>
                this.foodService
                    .find(action.foodId)
                    .pipe(
                        map((food: Food) => FoodActions.loadFoodSuccess({ food }))
                    ),
                onError: (action, error) => FoodActions.loadFoodFailure({ error })    
        })
    ) 
    );

    loadFoods$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FoodActions.loadFoods),
        fetch({
            run: () =>
                this.foodService
                    .all()
                    .pipe(
                        map((foods: Food[]) =>
                            FoodActions.loadFoodsSuccess({ foods }))
                    ),
                onError: (action, error) => FoodActions.loadFoodsFailure({ error })    
        })
    ));

    updateFood$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FoodActions.updateFood),
        pessimisticUpdate({
            run: (action) =>
                this.foodService
                    .update(action.food)
                    .pipe(
                        map((food: Food) => FoodActions.updateFoodSuccess({ food}))
                    ),
                onError: (action, error) => FoodActions.updateFoodFailure({ error })    

        })
    )
    )

    deleteFood$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FoodActions.deleteFood),
        pessimisticUpdate({
            run: (action) =>
                this.foodService
                    .delete(action.food)
                    .pipe(
                        map((food: Food) => FoodActions.deleteFoodSuccess({ food }))
                    ),
                onError: (action, error) => FoodActions.deleteFoodFailure({ error })    
        })
    ));

    createFood$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FoodActions.createFood),
        pessimisticUpdate({
            run: (action) =>
                this.foodService
                    .create(action.food)
                    .pipe(
                        map((food: Food) => FoodActions.createFoodSuccess({ food }))
                    ),
                onError: (action, error) => FoodActions.createFoodFailure({ error })    
        })
    )
    )
constructor(private actions$: Actions, private foodService: FoodService) {}    
} 