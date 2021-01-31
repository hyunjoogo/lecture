import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, year, rating, runtime, summary, poster, genres }) {
  return (
    <div className="movie__data">
      <img src={poster} alt={title} title={title} className="movie__poster" />
      <div className="movie__info">
        <h3 className="movie__title">{title}</h3>
        <p>장르</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__year">개봉 : {year}</p>
        <p className="movie__runtime">상영시간 : {runtime}분</p>
        <p className="movie__rating">평점 : {rating}</p>
        <div className="movie__summary">
          <p>줄거리</p>
          <p className="summary__text">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
