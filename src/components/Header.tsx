import '/src/styles/Header.css'
import { Link } from 'react-router-dom'


function Header()
{
  return (
    <header className='header'>
      <div>
        <Link to="/">MovieFinder</Link>
      </div>
      <div className="link-div">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/favourites">Favourites</Link>
      </div>
    </header>
  )
}

export default Header
