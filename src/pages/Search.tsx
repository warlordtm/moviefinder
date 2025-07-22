import '/src/styles/Search.css'
import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';
import { search_movies, get_popular_movies } from '../services/tmdb'
import { useDebounce } from '../hooks/useDebounce';
import '../styles/Pagination.css'


function Search()
{

    type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date?: string;
    overview: string
    vote_average: number
    original_language: string
  };


  const [query, set_query] = React.useState("")
  const debounced_query = useDebounce(query, 500)
  const [movie_results, set_movie_result] = React.useState<Movie[]>([])
  const [is_loading, set_is_loading] = React.useState(false)
  const [error, set_error] = React.useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [favourite, set_favourite] = useState<Movie[]>(() => {
    const stored = localStorage.getItem('favourite')
    return stored ? JSON.parse(stored) : []
})


  React.useEffect(() => {
    const stored = localStorage.getItem('favourite');
    if (stored) {
      set_favourite(JSON.parse(stored));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite))
  }, [favourite])

  React.useEffect(function()
  {
    set_is_loading(true)
    set_error("")

    async function get_movies()
    {
      try{
        const results = await search_movies(debounced_query, page)
        set_movie_result(results.results)
        setTotalPages(results.total_pages)
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
  },[debounced_query, page])

  function toggle_favourite(movie: Movie) {
    const isAlreadyFavourited = favourite.some(fav => fav.id === movie.id)

    if (isAlreadyFavourited) {
      set_favourite(prev => prev.filter(fav => fav.id !== movie.id))
    } else {
      set_favourite(prev => [...prev, movie])
    }
  }

  const movie_card = movie_results.map( data => 
    {
      return <MovieCard
        key={data.id}
        title={data.title}
        image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        year={data.release_date?.slice(0, 4) || 'N/A'}
        isFavourite={favourite.some(fav => fav.id === data.id)}
        onToggleFavourite={() => toggle_favourite(data)}
        overview={data.overview}
        rating={data.vote_average}
        language={data.original_language}
      />
    })

  return(
    <main className='main'>
      <section className='search-section'>
        <p>Discover and <span>Explore</span> Your Favourite <span>Movies</span> Like Never Before With our Intuitive Movie Search App</p>
        <div className='search-div'>
              <input 
              name='search' 
              id='search' 
              placeholder='Search through thousands of movies...' 
              value={query} 
              onChange={(event) => 
              {
                set_query(event.target.value) 
                setPage(1)
              }
            }/>
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

      {movie_results.length > 0 && <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>}
    </main>
  )
}

export default Search


