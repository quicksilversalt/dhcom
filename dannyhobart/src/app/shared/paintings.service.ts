import { Paintings } from "./paintings.model";
import { environment } from './../../environments/environment';

export class PaintingsService {

    private paintings: Paintings[] = [
        new Paintings("0",
                      "cur",
                      "untitled (water pipes)",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/bongs_hiRes.jpg",
                      environment.assetURL + "assets/img/ptg/bongs_hiRes.jpg",
                      "Oil on Linen.  Private Collection.",
                      "2008",
                      "",
                      "If I Should Die Before I Wake"),
        new Paintings("1",
                      "",
                      "champagne and chocolate",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/champagne_hi.jpg",
                      environment.assetURL + "assets/img/ptg/champagne_hi.jpg",
                      "Oil on Linen.  Collection of the artist.",
                      "2008",
                      "",
                      "If I Should Die Before I Wake"),
        new Paintings("2",
                      "",
                      "untitled (ruger)",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/ruger.jpg",
                      environment.assetURL + "assets/img/ptg/ruger.jpg",
                      "Oil on Panel.  Private Collection",
                      "2008",
                      "",
                      "If I Should Die Before I Wake"),
        new Paintings("3",
                      "",
                      "wilhelmina",
                      "24 x 36 inches",
                      environment.assetURL + "assets/img/ptg/wilhelmina.jpg",
                      environment.assetURL + "assets/img/ptg/wilhelmina.jpg",
                      "Oil on Linen.  Collection of the artist.",
                      "2008",
                      "",
                      "If I Should Die Before I Wake"),
    ];

    getPaintingById(id:number) {
        
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