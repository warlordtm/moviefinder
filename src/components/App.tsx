import '/src/styles/App.css'
import Header from './Header'
import Search from './Search'
import movieData from '../api/movieData'
import React from 'react'

function App() 
{
  return (
    <div className='main-container'>
        <Header/>
        <Search/>
    </div>
  )
}

export default App
