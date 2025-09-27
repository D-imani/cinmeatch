import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cinmeatch",
  description: "Movie Recommendation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="pt-20 px-6">{children}</main>
      </body>
    </html>
  );
}
