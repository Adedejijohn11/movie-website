import { render, screen } from "@testing-library/react";
import Home from "../app/home/page";

// Mock the TMDBContext since the Home component uses it
jest.mock("../contexts/TMDBContext", () => ({
  useTMBD: () => ({
    fetchMovies: jest.fn(),
    fetchTvShows: jest.fn(),
    fetchTrending: jest.fn(),
    movieData: [],
    tvData: [],
    trendingData: [],
    loading: false,
    error: null,
  }),
}));

// // Mock the data import
jest.mock("../data", () => ({
  mainMovieData: [],
  headerData: [
    {
      id: 1,
      title: "Test Movie",
      description: "Test description",
      img: "/test-image.jpg",
    },
  ],
}));

// // Mock the getImageUrl function
jest.mock("../lib/randfunctions", () => ({
  getImageUrl: jest.fn(() => "/test-image.jpg"),
}));

test("renders the correct header title", () => {
  render(<Home />); // ARRANGE

  // Look for the "Welcome to the Home Page" text that's directly in the Home component
  const headerElement = screen.getByText("Welcome to the Home Page"); // ACT

  // Assert that the element is in the document
  expect(headerElement).toBeInTheDocument(); //ASSERT
});

test("renders without crashing", () => {
  render(<Home />);

  // Check if the main container is rendered
  const mainContainer = screen.getByText("Welcome to the Home Page");
  expect(mainContainer).toBeInTheDocument();
});
