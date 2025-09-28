"use client";

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "@/lib/api";
import MovieCard from "@/components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading movies...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Trending Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
