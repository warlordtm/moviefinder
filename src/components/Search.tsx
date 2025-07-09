import '/src/styles/Search.css'

function Search()
{
  return(
    <section className='search-section'>
      <img src="/src/assets/react.svg"></img>
      <p>Find <span>Movies</span> You Will Enjoy Without the Hassle</p>
      <div>
        <form className='search-div'>
          <label htmlFor="search">
            <input name='search' id='search' placeholder='Search through thousands of movies...'/>
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </section>
  )
}

export default Search


