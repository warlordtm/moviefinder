import '/src/styles/MovieCard.css'
import { Link } from 'react-router-dom'

type MovieCardProps = {
  title: string;
  image: string;
  year: string;
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

function MovieCard({title, year, image, isFavourite, onToggleFavourite}: MovieCardProps)
{
  function get_movie_details()
  {
    console.log("clicked")
  }

  return (
    <section>
      <Link to="/movie-details" state={{ title, image, year, isFavourite }}>
        <div className='movie-card' onClick={() => get_movie_details()}>
        <div className='img-div'>
          <img src={image} alt='movie image'/>
        </div>
        <div className='movie-details'>
          <div>
            <p className='movie-title'>{title}</p>
          </div>
          <div>
            <div>
              <p className='movie-year'>{year}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
      
      <div className="favourite" onClick={onToggleFavourite}>
        {isFavourite ? '❤️' : '🤍'}
      </div>

    </section>
  )
}

export default MovieCard





