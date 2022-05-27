import { recipes } from "../data/Recipes"


export const getRecipeById = (id='') => {
    return recipes.find( recipe => recipe.id === id)
}