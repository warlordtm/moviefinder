import '/src/styles/App.css'
import Header from './Header'
import Search from './Search'
import movieData from '../api/movieData'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favourites from './Favourites'

function App() 
{
  return (
    <div className='main-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/Favourites' element={<Favourites/>}/>
        </Routes>
    </div>
  )
}

export default App
