import './App.css';
import React, { Component } from 'react';
// import Movie from './hoc/Movie';
// import Counter from './hooks/Counter';
// import Users from './hooks/Users';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import Login from './context/Login';

class App extends Component {
  handleLoggedIn = (username) => {
    console.log('Getting the user: ' + username);
    const user = { name: 'JW' };
    this.setState({ currentUser: user });
  };
  state = { currentUser: { name: null } };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage /> <br />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
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
