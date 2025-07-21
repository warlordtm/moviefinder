/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/'


export async function search_movies(query: string, page: number = 1)
{
  if(!query) return [];

  try{
    const url = `${BASE_URL}search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&page=${page}`
    const res = await fetch(url)
    const data = await res.json() 
    console.log(data)
    return data || []
  }
  catch(error) {
    console.error("Error finding movie", error)
    return []
  }
}

export async function get_popular_movies()
{
  try{
    const url = `${BASE_URL}movie/popular?api_key=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    return data.results || []
  }
  catch(error) {
    console.error("Error finding polular movies: ", error)
    return []
  }
}



/* export async function get_movie_details(movieId: number) {
  try {
    const res = await fetch(
      `${BASE_URL}movie/${movieId}?api_key=&append_to_response=videos`
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.error("Failed to fetch movie details:", err)
    return null
  }
} */
