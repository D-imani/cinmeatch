import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-2 hover:scale-105 transition">
      <Link href={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg"
        />
        <h2 className="text-white text-lg mt-2">{movie.title}</h2>
      </Link>
    </div>
  );
}
