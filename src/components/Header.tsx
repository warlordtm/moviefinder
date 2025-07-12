import '/src/styles/Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className="logo">🎬 MovieFinder</div>
      <div className="link-div">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? "link active" : "link"}>Favourites</NavLink>
      </div>
    </header>
  )
}

export default Header
