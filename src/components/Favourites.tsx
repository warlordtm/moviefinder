import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import '/src/styles/Favourites.css'

function Favourites() {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem('favourite')
    return stored ? JSON.parse(stored) : []
  })

  
  useEffect(() => {
    localStorage.setItem('favourite', JSON.stringify(favourites))
  }, [favourites])

  
  function toggleFavourite(movie: any) {
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
