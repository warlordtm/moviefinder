import '/src/styles/Search.css'
import React from 'react'
import MovieCard from './MovieCard'
import search_movies from '../api/tmdb.ts'


function Search()
{

    type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date?: string;
  };


  const [query, set_query] = React.useState("")
  const [movie_results, set_movie_result] = React.useState<Movie[]>([])

  React.useEffect(function()
  {
    async function get_movies()
    {
      const results = await search_movies(query)
      set_movie_result(results)
    }

    get_movies()

    console.log(movie_results)
  },[query])


  const movie_card = movie_results.map( data => 
    {
      return <MovieCard key={data.id} title = {data.title} image={`https://image.tmdb.org/t/p/w500${data.poster_path}`} year={data.release_date?.slice(0, 4) || 'N/A'}/>
    })

  return(
    <main className='main'>
      <section className='search-section'>
        <p>Find <span>Movies</span> You Will Enjoy Without the Hassle</p>
        <div className='search-div'>
              <input name='search' id='search' placeholder='Search through thousands of movies...' value={query} onChange={(event) => set_query(event.target.value)}/>
        </div>
      </section>
     <section className='movie-card-section'>
          {movie_card.length > 0 ? movie_card : <p className="no-results">No movies found.</p> }
      </section>
    </main>
    
  )
}

export default Search


