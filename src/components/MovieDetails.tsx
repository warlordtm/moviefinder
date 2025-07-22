import { useLocation } from "react-router-dom"
import '../styles/MovieDetails.css'

export default function MovieDetails() {
  const location = useLocation()
  const { title, image, year, isFavourite, rating, overview} = location.state || {}

  return (
    <section className="movie-details-section">
      <div className="container">
        <div className="movie-img-div">
          <img src={image} alt={title} className="movie-image"/>
        </div>
        <div className="movie-details">
          <h2>{title}</h2>
          <p className="movie-rating">⭐ {Math.round(rating * 10)/10}</p>
          <p className="movie-release-year">{year}</p>
        </div>
      </div>
      <div className="overview">
        <p className="plot">PLOT:</p>
        <h5 className="movie-overview">{overview}</h5>
        <p className="favourite-icon">{isFavourite ? '❤️ In favourites' : '🤍 Not in favourites'}</p>
      </div>
    </section>
  )
}
