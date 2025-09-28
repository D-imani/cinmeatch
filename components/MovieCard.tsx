import Image from "next/image";
import { Movie } from "@/types/movie";
import Link from "next/link";
import { useEffect, useState } from "react";
interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
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
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition">
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full h-80 object-cover"
            priority
          />
        ) : (
          <div className="w-full h-80 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-3">{movie.overview}</p>
        </div>
        <button
          onClick={toggleFavorite}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </Link>
  );
}
