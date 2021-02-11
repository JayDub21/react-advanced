import React, { Fragment, useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useDocumentTitle(`${name} clicked ${count} times!`);

  return (
    <Fragment>
      <br />
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <br />
      <div>
        {name} has clicked {count} times!
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
