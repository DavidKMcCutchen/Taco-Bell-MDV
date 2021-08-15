import { createAction, props } from "@ngrx/store";
import { Food } from "@taco-bell/api-interfaces";

// Select Entity

export const selectFood = createAction(
    '[FOOD] Select Food',
    props<{ foodId: string}>()
);

// Load Entities
export const loadFoods = createAction(
    '[FOOD] Loads Food',
);

export const loadFoodsSuccess = createAction(
    '[FOOD] Load Foods Success',
    props<{ foods: Food[]}>()
)

export const loadFoodsFailure = createAction(
    '[FOOD] Load Foods Failed',
    props<{ error: any}>()
);

// Load Single Entity

export const loadFood = createAction(
    '[FOOD] Load Food',
    props<{ foodId: string}>()
);

export const loadFoodSuccess = createAction(
    '[FOOD] Load Food Success',
    props<{ food: Food}>()
);

export const loadFoodFailure = createAction(
    '[FOOD] Load Food Failed',
    props<{ error: any}>()
);

// Load Entity Update

export const updateFood = createAction(
    '[FOODS] Update Food',
    props<{ food: Food}>()
)  
export const updateFoodSuccess = createAction(
    '[FOODS] Update Food Succeeded',
    props<{ food: Food}>()
)

export const updateFoodFailure = createAction(
    '[FOODS] Update Food Failed',
    props<{ error: any}>()
)

// Load Entity Delete

export const deleteFood = createAction(
    '[FOOD] Food Deleted',
    props<{food: Food}>()
);

export const deleteFoodSuccess = createAction(
    '[FOOD] Food Deleted Success',
    props<{food: Food}>()
);

export const deleteFoodFailure = createAction(
    '[FOOD] Food Deleted Failure',
    props<{error: any}>()
);

// Load Create Entity

export const createFood = createAction(
    '[FOOD] Create Food',
    props<{ food: Food}>()
);

export const createFoodSuccess = createAction(
    '[FOOD] Create Food Success',
    props<{ food: Food}>()
);

export const createFoodFailure = createAction(
    '[FOOD] Create Food Failure',
    props<{ error: any }>()
);