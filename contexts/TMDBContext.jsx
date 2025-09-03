import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

const TMDBContext = createContext();

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const TMDBProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [similarMoviesData, setSimilarMoviesData] = useState([]);
  const [movieDetailsData, setMovieDetailsData] = useState({});
  const [topRatedData, setTopRatedData] = useState([]);
  const [seriesDetailsData, setSeriesDetailsData] = useState({});
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const [searchTvData, setSearchTvData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetchMovies
  const fetchMovies = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setMovieData(response.data.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // fetchTvShows
  const fetchTvShows = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setTvData(response.data.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Trending Movies
  const fetchTrending = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setTrendingData(response.data.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Similar Movies
  const fetchSimilarMovies = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setSimilarMoviesData(response.data.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Top Rated
  const fetchTopRated = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setTopRatedData(response.data.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Movies Details
  const fetchMovieDetails = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setMovieDetailsData(response?.data);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // SeriesDetails
  const fetchSeriesDetails = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setSeriesDetailsData(response?.data);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // SearchMovies
  const searchMovies = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setSearchMoviesData(response?.data?.results);
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // SearchTV
  const SearchTv = useCallback(async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
        },
      });

      setSearchTvData(response?.data?.results);

      // console.log("=====================");
      // console.log(setSearchTvData);
      // console.log("=====================");
      setError(null);
    } catch (err) {
      console.log("An error occurred");
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.status_message || "Failed to fetch data");
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <TMDBContext.Provider
      value={{
        movieData,
        tvData,
        trendingData,
        similarMoviesData,
        topRatedData,
        loading,
        error,
        fetchMovies,
        fetchTvShows,
        fetchTrending,
        fetchSimilarMovies,
        fetchTopRated,
        fetchMovieDetails,
        movieDetailsData,
        fetchSeriesDetails,
        seriesDetailsData,
        searchMovies,
        searchMoviesData,
        SearchTv,
        searchTvData,
      }}
    >
      {children}
    </TMDBContext.Provider>
  );
};
export const useTMBD = () => useContext(TMDBContext);
