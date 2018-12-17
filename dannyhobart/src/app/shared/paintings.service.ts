import { Paintings } from "./paintings.model";
import { environment } from './../../environments/environment';

export class PaintingsService {

    private paintings: Paintings[] = [
        new Paintings("1",
                      "cur",
                      "some title",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/bongs_hiRes.jpg",
                      environment.assetURL + "assets/img/ptg/bongs_hiRes.jpg",
                      "this is the description",
                      "2008",
                      ""),
        new Paintings("2",
                      "",
                      "some title",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/champagne_hi.jpg",
                      environment.assetURL + "assets/img/ptg/champagne_hi.jpg",
                      "this is the description",
                      "2008",
                      ""),
        new Paintings("3",
                      "",
                      "some title",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/ruger.jpg",
                      environment.assetURL + "assets/img/ptg/ruger.jpg",
                      "this is the description",
                      "2008",
                      ""),
        new Paintings("4",
                      "",
                      "some title",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/wilhelmina.jpg",
                      environment.assetURL + "assets/img/ptg/wilhelmina.jpg",
                      "this is the description",
                      "2008",
                      ""),
    ];

    getPaintingById(id:number) {
        
    }

    getAllPaintings() {
        console.log('get all paintings called');
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