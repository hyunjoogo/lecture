import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  // const moviesID = movies.map((id) => id.id);
  // console.log(moviesID);
  res.render("movies", { movies });
};
export const movieDetail = (req, res) => {
  res.render("detail", { pagetitle: "" });
};
export const filterMovie = (req, res) => {};
