import { Component } from 'react';
import { fetchMovieByID } from '../services/themoviedb-api';
import routes from '../routes';
import Button from '../components/Button';
import Card from '../components/Card';
import AddInfo from '../components/AddInfo';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    locationFrom: null,
  };
  async componentDidMount() {
    const { location } = this.props;
    const locationFrom = location.state.from ? location.state.from : null;
    this.setState({ locationFrom });

    if (this.props.match.params && this.props.match.params.movieId) {
      const {
        match: {
          params: { movieId },
        },
      } = this.props;
      await fetchMovieByID(movieId).then(movie => this.setState({ movie }));
    }
  }

  handleButtonBack = () => {
    const { history } = this.props;
    const { locationFrom } = this.state;
    if (locationFrom) {
      return history.push(locationFrom);
    }
    history.push(routes.home);
  };

  render() {
    const { match } = this.props;
    const { movie } = this.state;
    return (
      <>
        {movie && (
          <div className="Container">
            <hr />
            <Button onClick={this.handleButtonBack} />
            <Card movie={this.state.movie} />
            <AddInfo url={match.url} path={match.path} />
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
