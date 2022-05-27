import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getRecipeById } from "../../selectors/getRecipeById";
import { useMemo } from 'react'


export const RecipeScreen = () => {

  const { recipeId } = useParams();

  // para memorizar o recordar y no llamar de nuevo la funcion cada que se haga un cambio en el estado del component
  const recipe = useMemo(() => getRecipeById(recipeId), [recipeId])

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  }

  if (!recipe) {
    return <Navigate to='/' />
  }

  const { id,
    titulo,
    descripcion,
    preparacion,
    ingredientes,
    notas_del_creador,
    calificacion,
    creador,
    categoria } = recipe;

  const imagePath = `/assets/recipes/img/${id}.jpg`

  return (

    <>

      <button className="btn btn-outline-info mt-5" onClick={handleReturn}>Return</button>
      <div className="row mt-5">


        <div className="row-4">
          <img className="img-thumbnail w-50" src={imagePath} alt={titulo} />
        </div>

        <div className="col-8">
          <h3 className="mt-5">{titulo}</h3>


          <h5 className="mt-5">Description</h5>
          <p>{descripcion}</p>

          <h5 className="mt-5">Ingredients</h5>
          <p>{ingredientes}</p>

          <h5 className="mt-5">Preparation</h5>
          <p>{preparacion}</p>
          <ul className="list-group list-group-flush mb-5">
            <h6 className="mt-3">Category</h6>
            <li className="list-group-item">{categoria}</li>
            <h6 className="mt-3">Rating</h6>
            <li className="list-group-item">{calificacion}</li>
            <h6 className="mt-3">Autor</h6>
            <li className="list-group-item">{creador}</li>
            <h6 className="mt-3">Notes</h6>
            <li className="list-group-item">{notas_del_creador}</li>
          </ul>

        </div>

      </div>

    </>
  )
}
