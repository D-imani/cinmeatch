import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-white">No favorites yet.</p>
        )}
      </div>
    </>
  );
}
