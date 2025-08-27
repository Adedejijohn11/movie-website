import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const TMDBContext = createContext();

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const TMDBProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("====================================");
  console.log(movieData);
  console.log("====================================");

  const fetchMovies = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
      const data = await response.json();
      if (response.ok) {
        setMovieData(data.results);
        setError(null);
      } else {
        setError(data.status_message || "Failed to fetch data");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies("/movie/popular");
  }, [fetchMovies]);

  return (
    <TMDBContext.Provider value={{ movieData, loading, error, fetchMovies }}>
      {children}
    </TMDBContext.Provider>
  );
};
export const useTMBD = () => useContext(TMDBContext);
