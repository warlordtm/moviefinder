import '/src/styles/Search.css'
import React from 'react'
import movieData from './data/movieData'
import MovieCard from './MovieCard'

function Search()
{

  const [movie_results, set_movie_results] = React.useState("") 

  const [query, set_query] = React.useState("")

  const query_match = movieData.filter(movie => movie.movie_title.toLowerCase().includes(query.toLowerCase()))

  const movie_card = query_match.map( data => 
    {
      return <MovieCard key={data.id} title = {data.movie_title} image = {data.movie_img} year = {data.movie_year}/>
    })

    console.log(movie_card)
    console.log(movie_card.length)
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


