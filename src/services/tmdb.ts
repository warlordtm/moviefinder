
const BASE_URL = 'https://api.themoviedb.org/3/'


export async function search_movies(query: string)
{
  if(!query) return [];

  try{
    //const url = `${BASE_URL}search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`;
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=422ffb1651fc32e5dac3ce980edb4476`
    const res = await fetch(url)
    const data = await res.json() 
    console.log(data.results)
    return data.results || []
  }
  catch(error) {
    console.error("Error finding movie", error)
    return []
  }
}

export async function get_popular_movies()
{
  try{
    //const url = `${BASE_URL}movie/popular?api_key=${API_KEY}`
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=422ffb1651fc32e5dac3ce980edb4476'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data.results || []
  }
  catch(error) {
    console.error("Error finding polular movies: ", error)
    return []
  }
}


