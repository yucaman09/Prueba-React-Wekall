import { Link } from 'react-router-dom'


export const RecipesCard = ({
  id,
  titulo,
  descripcion,
  preparacion,
  ingredientes,
  notas_del_creador,
  calificacion,
  creador,
  categoria }) => {

  const imagePath = `/assets/recipes/img/${id}.jpg`
  return (

    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-12">
            <img src={imagePath} className='card-img' alt={titulo} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{descripcion}</p>

              <p className="card-text">
                <small className="text-muted">{ notas_del_creador}</small>
              </p>

              <Link to={`/recipe/${id}`} className="btn btn-secondary">
                Ver mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
