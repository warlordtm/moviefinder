/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method : 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer${API_KEY}`
  }
}

console.log(API_KEY)