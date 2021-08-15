import { of } from "rxjs"

export const emptyFood = {
id: '',
name: '',
price: '',
description: ''
}

export const mockFood = {
id: '1',
name: 'mock food',
price: 'mock price',
description: 'mock description'
}

export const mockFoodFacade = {
mutations$: of(),
loadFoods: () => {},
selectFood: () => {},
saveFood: () => {},
deleteFood: () => {}
}