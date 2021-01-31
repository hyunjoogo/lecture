import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./app.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="movies">
        {isLoading
          ? "로딩중.."
          : movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
      </section>
    );
  }
}

export default App;
