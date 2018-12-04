import { Paintings } from "./paintings.model";

export class PaintingsService {

    private paintings: Paintings[] = [
    ];

    getPaintingById(id) {
        
    }

    getAllPaintings() {
        return this.paintings.slice();
    }

    // addIngredient(ingredient: Ingredient) {
    //     this.ingredients.push(ingredient);
    //     this.ingredientsChanged.emit(this.ingredients.slice());//broadcast the change and attach a snapshot of the array
    // }

    // addIngredients(ingredients: Ingredient[]) {
    //     this.ingredients.push(...ingredients);// spreads ingredients into individual items and pushes each one.
    // }
}