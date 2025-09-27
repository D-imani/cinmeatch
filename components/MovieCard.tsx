import Link from "next/link";
import { useEffect, useState } from "react";

export default function MovieCard({ movie }: { movie: any }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      const favorites = JSON.parse(stored);
      setIsFavorite(favorites.some((fav: any) => fav.id === movie.id));
    }
  }, [movie.id]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem("favorites");
    let favorites = stored ? JSON.parse(stored) : [];

    if (isFavorite) {
      favorites = favorites.filter((fav: any) => fav.id !== movie.id);
    } else {
      favorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center">
      {/* Link wraps the poster */}
      <Link href={`/movie/${movie.id}`} className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg mb-3 w-full h-72 object-cover hover:scale-105 transition"
        />
      </Link>
      <h2 className="text-lg font-semibold text-center text-white mb-2">
        {movie.title}
      </h2>
      <button
        onClick={toggleFavorite}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
