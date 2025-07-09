import '/src/styles/App.css'
import Header from './Header'
import Search from './Search'
import MovieCard from './MovieCard'
import movieData from './data/movieData'
import React from 'react'

function App() 
{
  const [movie_data, set_movie_data] = React.useState(movieData)
  
  const movie_card = movie_data.map( data => 
    {
      return <MovieCard key={data.id} title = {data.movie_title} image = {data.movie_img} year = {data.movie_year}/>
    })

  return (
    <div className='main-container'>
        <Header/>
      <main className='main'>
          <Search/>
          <section className='movie-card-section'>
            {movie_card}
          </section>
      </main>
    </div>
  )
}

export default App
