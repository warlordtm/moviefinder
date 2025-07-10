import { useLocation } from "react-router-dom"
import '../styles/MovieDetails.css'

export default function MovieDetails() {
  const location = useLocation()
  const { title, image, year, isFavourite, rating, description} = location.state || {}

  return (
    <section className="movie-details-page">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Released: {year}</p>
      <div>
        <p>7.7 rating</p>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem optio nisi, doloribus tenetur minima, hic aliquam vero incidunt voluptate id sunt, facilis aperiam expedita omnis! Harum reiciendis iste explicabo neque.</p>
      <p>{isFavourite ? '❤️ In favourites' : '🤍 Not in favourites'}</p>
    </section>
  )
}
