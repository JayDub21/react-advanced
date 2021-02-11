import React, { useContext } from 'react';
import UserContext from './userContext';

function MovieRox(props) {
  const currentUser = useContext(UserContext);
  console.log('functional component context', currentUser);

  return <div>Functional Component: {currentUser.name}</div>;
}

export default MovieRox;
