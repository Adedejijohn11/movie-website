# Cinema Movies Website

A user-friendly movie website that allows users to browse new releases, select movies by category, view detailed information, and search for films seamlessly. This project demonstrates modern web development practices with a focus on usability, responsiveness, and smooth user experience.

## Features

- Browse the latest movies , Tv series and
- Select movies by category (Action, Comedy, Drama, etc.)
- View detailed movie information (title,description and release date)
- Search for movies quickly and efficiently
- Responsive design for desktop and mobile devices

## Technologies Used

- _Frontend:_ Nextjs,CSS and JavaScript
- _State Management:_ React Hooks (useState, useEffect)
- _API:_ TMDB API [https://developer.themoviedb.org/reference/intro/getting-started]
- \_placeholder image: data folder
- _Other Tools:_ Fetch API for HTTP requests, CSS frameworks (Tailwind)

## Installation

1. Clone the repository:

````bash
git clone https://github.com/Adedejijohn11/movie-website.git


2. Install dependencies

```bash
npm install


3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

when open the link click on Login now
navigate to login page then click on login without info
select any user to watch
Browse movies on the homepage.
Click on a movie to view detailed information.
click on Tvseries page watch series
Use the search bar to find a specific movie.

## Root

- app - for pages and routes
- components - for the props pass to the pages
- contexts - for global api fetching
- data - the placeholder data used for homepage header
- lib - to get tmdb api image

## Pages / Routes

The website includes the following routes:

- app/page - Welcome page
- /auth/login - login page
- /auth/register - register page
- / Home page (highlights Brand new releases, Collections, Interesting Tv Shows and Trending)
- /Tv series – Browse all tv series
- /Tv series/:id – series details page
- /movies – Browse all movies
- /movies/:id – Movie details page
- /search – Search results page for finding movies quickly

The components

- /components/details - includes the id details for tvseriesdetails and moviesdetails
- /components/home - includes the home header and sections
- /components/movies - includes the movies header and mainSections
- /components/navbar - includes the navbar and conditionalnavbar(to hide navbar on profile page)
- /components/tvseries - includes the tvseries sections
- /components/ui - includes the tvseriesCards, moviesCards and searchCard

This is a movie site, it's an MVP movie website built for
learing popurse but it has the major functionalities.
