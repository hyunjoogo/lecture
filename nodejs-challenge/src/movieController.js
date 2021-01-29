import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  res.render("movies", { pagetitle: "" });
};
export const movieDetail = (req, res) => {};
export const filterMovie = (req, res) => {};
