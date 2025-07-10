import { useLocation } from "react-router-dom"
import '../styles/MovieDetails.css'

export default function MovieDetails() {
  const location = useLocation()
  const { title, image, year, isFavourite } = location.state || {}

  return (
    <section className="movie-details-page">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Released: {year}</p>
      <p>{isFavourite ? '❤️ Favourited' : '🤍 Not Favourited'}</p>
    </section>
  )
}
