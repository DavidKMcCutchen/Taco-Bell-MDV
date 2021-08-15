import { ActionReducerMap } from "@ngrx/store";
import * as fromFood from './food/food.reducer';

export interface AppState {
    [fromFood.FOOD_FEATURE_KEY]: fromFood.FoodState
}

export const reducers: ActionReducerMap<AppState> = {
    [fromFood.FOOD_FEATURE_KEY]: fromFood.foodReducer
}