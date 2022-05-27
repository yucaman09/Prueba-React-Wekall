import { Routes, Route } from 'react-router-dom'
import { Navbar } from "../components/ui/navBar"

import { CreateRecipes } from '../components/CreateRecipes/CreateRecipes'
import { HomeScreen } from '../components/HomeScreen/HomeScreen'
import { RecipesScreen } from '../components/RecipesScreen/RecipesScreen'
import { SignUp } from '../components/SignUp/SignUp'
import { RecipeScreen } from '../components/RecipeScreen/RecipeScreen'


export const DashboardRoutes = () => {
  return (
    <>

      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='recipe/:recipeId' element={<RecipeScreen />} />
          <Route path='recipes' element={<RecipesScreen />} />
          <Route path='createRecipes' element={<CreateRecipes />} />
        </Routes>
      </div>
    </>
  )
}
