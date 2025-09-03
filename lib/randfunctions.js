export const getImageUrl = (path, size = "w500") => {
  if (!path) return "/images/Bg-gallery.jpg"; // Fallback image
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
