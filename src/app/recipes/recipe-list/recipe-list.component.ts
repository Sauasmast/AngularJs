import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test123',
      'This is a test',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2012/05/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf.jpeg'
    ),
    new Recipe(
      'Test123',
      'This is a test',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2012/05/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf.jpeg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
