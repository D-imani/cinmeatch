import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">
        CineMatch
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}
