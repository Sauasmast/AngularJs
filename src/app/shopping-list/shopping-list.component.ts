import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistService } from 'src/app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredients: Ingredient[] = [];
  private subscription: Subscription;
  constructor(private slService: shoppinglistService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    console.log(index);
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
