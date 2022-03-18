import { Dbingredient } from "./dbingredients";

export type Recipedetails = {
    ingredients: Dbingredient[],
    name: string,
    time: number,
    howto: string,
    category: string
}
