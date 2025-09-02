export const getImageUrl = (path, size = "w500") => {
  if (!path) return "/images/movie-placeholder.jpg"; // Fallback image
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
