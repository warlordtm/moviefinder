import '/src/styles/MovieCard.css'
import { Link } from 'react-router-dom'

type MovieCardProps = {
  title: string;
  image: string;
  year: string;
  isFavourite: boolean;
  onToggleFavourite: () => void;
  rating: string
  overview: string
  language: string
}

function MovieCard({title, year, image, isFavourite, rating, language, overview, onToggleFavourite}: MovieCardProps)
{

  return (
    <section>
      <Link className="movie-card-div" to="/movie-details" state={{ title, image, overview, rating, year, isFavourite, language }}>
        <div className='movie-card'>
          <div className='img-div'>
            <img src={image} alt='movie image'/>
          </div>
          <div className='movie-details'>
            <div>
              <p className='movie-title'>{title}</p>
            </div>
            <div className='movie-attributes'>
              <div>⭐ {`${rating.split('')[0]}.${rating.split('')[2]}`} </div>
              <div>. {`${language.split('')[0].toUpperCase()}${language.split('')[1].toLowerCase()}`} .</div>
              <div>{year}</div>
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





