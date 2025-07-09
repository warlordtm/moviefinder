import '/src/styles/Search.css'
import React from 'react'
import movieData from './data/movieData'

function Search()
{

  const [query, set_query] = React.useState("")

  /* function handle_search(event: any)
  {
    event.preventDefault()
    const movie_title = 

  } */

  return(
    <section className='search-section'>
      <img src="/src/assets/react.svg"></img>
      <p>Find <span>Movies</span> You Will Enjoy Without the Hassle</p>
      <div className='search-div'>
            <input name='search' id='search' placeholder='Search through thousands of movies...' value={query} onChange={(event) => set_query(event.target.value)}/>
      </div>
    </section>
  )
}

export default Search


