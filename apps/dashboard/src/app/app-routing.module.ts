import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodService } from "@taco-bell/core-data";
import { LoginComponent } from "@taco-bell/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'foods', component: FoodComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
