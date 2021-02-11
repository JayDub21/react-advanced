import './App.css';
// import Movie from './hoc/Movie';
// import Counter from './hooks/Counter';
// import Users from './hooks/Users';

import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {
  state = { currentUser: { name: 'JW' } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

// function App() {
//   return (

//     <Users />

//     // <Counter />

//     //   <Movie id={1} />;
//   );
// }
