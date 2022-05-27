import {recipes} from '../data/Recipes'


export const getRecipeByCategory = ( category ) =>{
    const validCategorys = ['Vegetales', 'Carnes']

    if (!validCategorys.includes(category)) {
        throw new Error(`${category} is not a valid category`);
    }
    return recipes.filter( recipe => recipe.categoria === category) 
}