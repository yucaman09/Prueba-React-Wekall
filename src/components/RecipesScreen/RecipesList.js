import { useMemo } from "react";
import { getRecipeByCategory } from "../../selectors/getRecipeByCategory"
import { RecipesCard } from "./RecipesCard";

export const RecipesList = ({ category }) => {

    const recipes = useMemo(() => getRecipeByCategory(category), [category])
    // const recipes = getRecipeByCategory(category);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">

            {
                recipes.map(recipe => (
                    <RecipesCard key={recipe.id} {...recipe} />
                ))
            }

        </div>
    )
}
