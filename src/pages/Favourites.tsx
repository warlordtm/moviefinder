import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import '/src/styles/Favourites.css'

type Movie = {
  id: number
  title: string
  poster_path: string
  release_date?: string
  overview: string
  vote_average: number
  original_language: string
}

function Favourites() {
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem('favourite')
    return stored ? JSON.parse(stored) : []
  })

  
  useEffect(() => {
    localStorage.setItem('favourite', JSON.stringify(favourites))
  }, [favourites])

  
  function toggleFavourite(movie: Movie) {
    setFavourites(prev => prev.filter(fav => fav.id !== movie.id))
  }

  return (
    <main className="main">
      <h1 className='h1'>Your Favourites</h1>
      <section className="movie-card-section">
        {favourites.length > 0 ? (
          favourites.map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              year={movie.release_date?.slice(0, 4) || 'N/A'}
              isFavourite={true}
              onToggleFavourite={() => toggleFavourite(movie)}
              overview={movie.overview}
              rating={movie.vote_average.toString()}
              language={movie.original_language}
            />
          ))
        ) : (
          <p className="no-results">You haven’t added any favourites yet.</p>
        )}
      </section>
    </main>
  )
}

export default Favourites
