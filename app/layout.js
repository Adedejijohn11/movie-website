import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/navbar/conditionalNavbar";
import { TMDBProvider } from "@/contexts/TMDBContext";
// import metadata from "@/app/layoutmetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = metadata;

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default async function RootLayout({ children }) {
  let moviesData = [],
    tvData = [],
    trendingData = [],
    similarMoviesData = [],
    topRatedData = [];

  try {
    const [moviesRes, tvRes, trendingRes, similarMoviesRes, topRatedRes] =
      await Promise.all([
        fetch(
          `${BASE_URL}/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
          { next: { revalidate: 3600 } }
        ),
        fetch(
          `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
          { next: { revalidate: 3600 } }
        ),
        fetch(
          `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
          { next: { revalidate: 3600 } }
        ),
        fetch(
          `${BASE_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`,
          {
            next: { revalidate: 3600 },
          }
        ),
        fetch(
          `${BASE_URL}/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
          { next: { revalidate: 3600 } }
        ),
      ]);

    [moviesData, tvData, trendingData, topRatedData, similarMoviesData] =
      await Promise.all([
        moviesRes.json(),
        tvRes.json(),
        trendingRes.json(),
        similarMoviesRes.json(),
        topRatedRes.json(),
      ]);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalNavbar />
        <TMDBProvider
          initialMovies={moviesData.results || []}
          initialTv={tvData.results || []}
          initialTrending={trendingData.results || []}
          initialSimilarMovies={similarMoviesData.results || []}
          initialtopRated={topRatedData.results || []}
        >
          {children}
        </TMDBProvider>
      </body>
    </html>
  );
}
