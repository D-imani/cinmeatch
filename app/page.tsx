"use client";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [movies, setMovies] = useState<any[]>([]); // initialize as empty array

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results || []); // make sure it's always an array
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="col-span-full text-center text-gray-400">
            Loading movies...
          </p>
        )}
      </main>
    </div>
  );
}
