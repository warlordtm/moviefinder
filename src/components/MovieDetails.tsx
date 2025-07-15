import { useLocation } from "react-router-dom"
import '../styles/MovieDetails.css'

export default function MovieDetails() {
  const location = useLocation()
  const { title, image, year, isFavourite, rating, overview} = location.state || {}

  return (
    <section className="flex mt-13 mr-8 justify-center items-center ml-8 -space-x-16 max-sm:flex-col max-md:mt-37">
      <div className="movie-img-div w-[100%]">
        <img src={image} alt={title} className="w-[100%] rounded-lg h-120 object-cover"/>
      </div>
      <div className="movie-details -ml-25 max-md:flex-col max-md:ml-4">
        <h2><strong>TITLE: </strong>{title}</h2>
        <p className="movie-release-year"><strong>RELEASED: </strong> {year}</p>
        <p className="movie-rating"><strong>RATING: ⭐ </strong> {Math.round(rating * 10)/10}</p>
        <p className="movie-overview"><strong>DESCRIPTION: </strong>{overview}</p>
        <p className="favourite-icon">{isFavourite ? '❤️ In favourites' : '🤍 Not in favourites'}</p>
      </div>
    </section>
  )
}
