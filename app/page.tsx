import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
