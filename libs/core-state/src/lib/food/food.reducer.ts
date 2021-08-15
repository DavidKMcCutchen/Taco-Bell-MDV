import { Food } from "@taco-bell/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as FoodActions from './food.actions';

export const FOOD_FEATURE_KEY = 'foods';

export interface FoodState extends EntityState<Food> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface FoodPartialState {
    readonly [FOOD_FEATURE_KEY] : FoodState
};

export const foodAdapter: EntityAdapter<Food> = createEntityAdapter<Food>();

export const initialFoodState: FoodState = foodAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, {error}): FoodState => ({ ...state, error });

const onDispatch = (state, action): FoodState => ({
    ...state,
    loaded: false,
    error: null
});

const _foodReducer = createReducer(
    initialFoodState,
    on(
        FoodActions.loadFoodFailure,
        FoodActions.loadFoodsFailure,
        FoodActions.createFoodFailure,
        FoodActions.updateFoodFailure,
        FoodActions.deleteFoodFailure,
        onFailure
    ),
    on(
        FoodActions.loadFood,
        FoodActions.loadFoods,
        FoodActions.createFood,
        FoodActions.updateFood,
        FoodActions.deleteFood,
        onDispatch
    ),
    on(
        FoodActions.loadFoodSuccess, (state, { food }) =>
        foodAdapter.upsertOne(food, {...state, loaded: true})
    ),
    on(
        FoodActions.selectFood, (state, { foodId }) => ({
            ...state,
            selectedId: foodId
        })
    ),
    on(
        FoodActions.loadFoodsSuccess, (state, { foods }) => 
        foodAdapter.setAll(foods, {...state, loaded: true})
    ),
    on(
        FoodActions.deleteFoodSuccess, (state, { food }) =>
        foodAdapter.removeOne(food.id, {...state, loaded: true})
    ),
    on(
        FoodActions.updateFoodSuccess, (state, { food }) =>
        foodAdapter.updateOne(
            {id: food.id, changes: food},
            {...state, loaded: true}
        )
    ),
    on(
        FoodActions.createFoodSuccess, (state, { food }) => 
        foodAdapter.addOne(food, {...state, loaded: true})
    ),
)

export function foodReducer (
    state: FoodState | undefined,
    action: Action 
) {
    return _foodReducer(state, action)
};


