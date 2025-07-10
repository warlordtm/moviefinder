import '/src/styles/Search.css'
import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { search_movies, get_popular_movies } from '../api/tmdb'
import { useDebounce } from '../hooks/useDebounce';



function Search()
{

    type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date?: string;
  };


  const [query, set_query] = React.useState("")
  const debounced_query = useDebounce(query, 500)
  const [movie_results, set_movie_result] = React.useState<Movie[]>([])
  const [is_loading, set_is_loading] = React.useState(false)
  const [error, set_error] = React.useState("")

  React.useEffect(function()
  {
    set_is_loading(true)
    set_error("")

    async function get_movies()
    {
      try{
        const results = await search_movies(debounced_query)
        set_movie_result(results)
      }catch(err){
        set_error("Failed to load movies. Please try again.");
        set_movie_result([])
      }finally{
        set_is_loading(false)
      }
    }

    async function fetch_popular_movies()
    {
      try{
        const results = await get_popular_movies()
        set_movie_result(results)
      }catch(err){
        set_error("Failed to load movies. Please try again.");
        set_movie_result([])
      }finally{
        set_is_loading(false)
      }
    }

    if(debounced_query)
    {
      get_movies()
    }else{
      fetch_popular_movies()
    }
  },[debounced_query])


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
     {!is_loading ? (
      <section className='movie-card-section'>
        {movie_card.length > 0 ? movie_card : <p className="no-results">No movies found.</p>}
      </section>
      ) : (
        <div className='loading'></div>
      )}

      {error && !is_loading && <p className="error">{error}</p>}

    </main>
    
  )
}

export default Search


