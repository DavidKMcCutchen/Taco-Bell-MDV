import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Food } from "@taco-bell/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  model = 'foods'

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Food[]>(this.getUrl());
  };

  find(foodId: string) {
    return this.httpClient.get<Food>(this.getUrlById(foodId))
  };

  create(foods: Food) {
    return this.httpClient.post<Food>(this.getUrl(), foods)
  };

  update(foods: Food) {
    return this.httpClient.patch<Food>(this.getUrlById(foods.id), foods)
  };

  delete({ id }: Food) {
    return this.httpClient.delete<Food>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
