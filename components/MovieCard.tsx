import Image from "next/image";
import { Movie } from "@/types/movie";
import Link from "next/link";
interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
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
      </div>
    </Link>
  );
}
