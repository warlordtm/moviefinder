/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function search_movies(query: string)
{
  if(!query) return [];

  try{
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=422ffb1651fc32e5dac3ce980edb4476`;
    const res = await fetch(url)
    const data = await res.json() 
    console.log(data)
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
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=422ffb1651fc32e5dac3ce980edb4476"
    const res = await fetch(url)
    const data = await res.json()
    return data.results || []
  }
  catch(error) {
    console.error("Error finding polular movies: ", error)
    return []
  }
}