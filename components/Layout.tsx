import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CineMatch",
  description: "Movie recommendation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="pt-20 px-6">{children}</main>
      </body>
    </html>
  );
}
