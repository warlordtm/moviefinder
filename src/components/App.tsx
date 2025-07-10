import '/src/styles/App.css'
import Header from './Header'
import Search from './Search'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favourites from './Favourites'
import MovieDetails from './MovieDetails'

function App() 
{
  return (
    <div className='main-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/movie-details' element={<MovieDetails/>}/>
        </Routes>
    </div>
  )
}

export default App
