import React, { Fragment, useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `${name} clicked ${count} times!`;
  }, [name, count]);

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
