import { createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyFood } from "@taco-bell/api-interfaces";
import { foodAdapter, FoodState, FOOD_FEATURE_KEY } from "./food.reducer";

export const getFoodState = createFeatureSelector<FoodState>(FOOD_FEATURE_KEY);

const { selectAll, selectEntities} = foodAdapter.getSelectors();

export const getFoodsLoaded = createSelector(
    getFoodState,
    (state: FoodState) => state.loaded
);

export const getFoodError = createSelector(
    getFoodState,
    (state: FoodState) => state.error 
);

export const getAllFoods = createSelector(
    getFoodState,
    (state: FoodState) => selectAll(state)
);

export const getFoodEntities = createSelector(
    getFoodState,
    (state: FoodState) => selectEntities(state)
);

export const getSelectedFoodId = createSelector(
    getFoodState,
    (state: FoodState) => state.selectedId
);

export const getSelectedFood = createSelector(
    getFoodEntities,
    getSelectedFoodId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyFood
)