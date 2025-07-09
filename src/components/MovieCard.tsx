import '/src/styles/MovieCard.css'

function MovieCard({title, year, image})
{
  return (
    <section>
      <div className='movie-card'>
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
      <div className='favourite'>
        ❤️
      </div>
    </section>
  )
}

export default MovieCard





