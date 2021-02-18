import { Component } from 'react';
import parseQueryString from '../utils/parseQueryString';
import SearchBar from '../components/Searchbar';
import { NotificationContainer } from '../components/Notification';
import { fetchMoviesByQuery } from '../services/themoviedb-api';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const { query } = parseQueryString(this.props.location.search);
    if (query) {
      await this.handleFetchhMovies(query);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQueryString(prevProps.location.search);
    const { query } = parseQueryString(this.props.location.search);
    if (prevQuery !== query) {
      await this.handleFetchhMovies(query);
    }
  }

  handleFetchhMovies = query => {
    fetchMoviesByQuery(query).then(movies => this.setState({ movies }));
  };

  handleQueryFromSearchbar = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, query } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleQueryFromSearchbar} />
        {movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : query ? (
          <h1>Не будем материться...</h1>
        ) : null}
        <NotificationContainer />
      </>
    );
  }
}

export default MoviesPage;
