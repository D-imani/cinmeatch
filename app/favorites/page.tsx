"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">⭐ My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No favorite movies yet. Go add some!</p>
      )}
    </div>
  );
}
