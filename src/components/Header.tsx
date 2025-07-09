import '/src/styles/Header.css'

function Header()
{
  return (
    <header className='header'>
      <div>
        <a href='#'>MovieFinder</a>
      </div>
      <div className="link-div">
        <a className="link" href='#'>Home</a>
        <a className="link" href='#'>Favourites</a>
      </div>
    </header>
  )
}

export default Header
