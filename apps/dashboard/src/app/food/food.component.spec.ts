import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodFacade } from '@taco-bell/core-state';
import { FoodComponent } from './food.component';
import { mockFood, emptyFood, mockFoodFacade } from "@taco-bell/testing";


describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;
  let foodFacade: FoodFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FoodComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: FoodFacade,
          useValue: mockFoodFacade
        }
      ]
    })
    .overrideTemplate(FoodComponent, '')
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    foodFacade = TestBed.inject(FoodFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// 1. selectFood()
  describe('#selectFood', () => {
    it('should call facade method `selectFood` with an argument of food.id', () => {
      jest.spyOn(foodFacade, 'selectFood');
  
      component.selectFood(mockFood);
  
      expect(foodFacade.selectFood).toHaveBeenCalledWith(mockFood.id);
    })

    it('should patch form with passed `food`', () => {
      component.selectFood(mockFood);

      expect(component.form.value).toEqual(mockFood)
    })
  });
// 2. saveFood()
  describe('#saveFood', () => {
    it('should call facade method `saveFood` with an argument of food', () => {
      jest.spyOn(foodFacade, 'saveFood');

      component.saveFood(mockFood);

      expect(foodFacade.saveFood).toHaveBeenCalledWith(mockFood);
    } )
  });

  describe('#deleteFood', () => {
    it('should call facade method `deleteFood` with an argument of `food`');
    jest.spyOn(foodFacade, 'deleteFood');

    component.deleteFood(mockFood)

    expect(foodFacade.deleteFood).toHaveBeenCalledWith(mockFood);
  });

  describe('#resetFood', () => {
    it('should call FormGroup method `reset`');
    jest.spyOn(component.form, 'reset');
    component.form.reset();
    expect(component.form.reset).toHaveBeenCalledWith();
  })

  it('should be called with component method `selectFood` with an argument of emptyFood', () => {
  jest.spyOn(component, 'selectFood');
  component.selectFood(emptyFood);
  expect(component.selectFood).toHaveBeenCalledWith(emptyFood)
  })
});