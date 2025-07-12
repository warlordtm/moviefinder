import '/src/styles/App.css'
import Header from './Header'
import Search from '../pages/Search'
import { Routes, Route } from 'react-router-dom'
import Favourites from '../pages/Favourites'
import MovieDetails from './MovieDetails'
import Footer from './Footer'
import Privacy from '../policies/Privacy'
import Terms from '../policies/Terms'

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/movie-details' element={<MovieDetails />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
