import { useLocation } from "react-router-dom"
import '../styles/MovieDetails.css'

export default function MovieDetails() {
  const location = useLocation()
  const { title, image, year, isFavourite, rating, overview} = location.state || {}

  return (
    <section className="movie-details-page">
      <div className="movie-img-div">
        <img src={image} alt={title} />
      </div>
      <div className="movie-details">
        <h2><strong>TITLE: </strong>{title}</h2>
        <p className="movie-release-year"><strong>RELEASED: </strong> {year}</p>
        <p className="movie-rating"><strong>RATING: ⭐ </strong> {Math.round(rating * 10)/10}</p>
        <p className="movie-overview"><strong>DESCRIPTION: </strong>{overview}</p>
        <p className="favourite-icon">{isFavourite ? '❤️ In favourites' : '🤍 Not in favourites'}</p>
      </div>
    </section>
  )
}
