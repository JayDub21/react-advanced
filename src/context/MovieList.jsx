import React, { Component } from 'react';
import UserContext from './userContext';

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log('context', this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>{userContext.name}'s Movie List</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
