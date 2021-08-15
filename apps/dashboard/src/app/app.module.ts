import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodDetailsComponent } from './food/food-details/food-details.component';
import { MaterialModule } from '@taco-bell/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@taco-bell/core-data';
import { CoreStateModule } from '@taco-bell/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, FoodComponent, FoodListComponent, FoodDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
