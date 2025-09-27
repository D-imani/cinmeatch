import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "@/lib/api";
import Navbar from "@/components/Navbar";

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id as string).then(setMovie);
    }
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 text-white">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="mt-4">{movie.overview}</p>
      </div>
    </>
  );
}
