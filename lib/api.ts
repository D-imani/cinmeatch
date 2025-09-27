const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.json();
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
}
