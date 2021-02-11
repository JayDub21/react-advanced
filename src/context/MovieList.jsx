import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log('context', this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Class Component: {userContext.name}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
