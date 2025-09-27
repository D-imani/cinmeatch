"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function MovieDetailPage() {
  const { id } = useParams(); // 👈 works only in client components
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p className="p-6 text-gray-400">Loading movie details...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300} // fixed width
          height={450}
          className="rounded-lg w-full md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <p className="text-sm text-gray-400">
            Release Date:{" "}
            <span className="font-medium">{movie.release_date}</span>
          </p>
          <p className="text-sm text-gray-400">
            Rating: <span className="font-medium">{movie.vote_average} ⭐</span>
          </p>
        </div>
      </div>
    </div>
  );
}
