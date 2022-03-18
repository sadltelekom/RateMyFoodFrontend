import { Dbingredient } from "./dbingredients";
import { Ingredient } from "./ingredient";

export type Recipedetails = {
    ingredients: Ingredient[],
    name: string,
    time: number,
    howto: string,
    category: string
}
