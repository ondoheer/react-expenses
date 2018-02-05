import React       from 'react';
import                  './style.scss';


export default ({ count, fooStatus, testAction, getFoo, }) => (
  <div className="app">
    <h1>REACT REDUX BOILER</h1>
    <button
      onClick={testAction}
    >
      {count}
    </button>
    <div>
      <button
        onClick={getFoo}
      >
        Get Foo
      </button>
      {fooStatus === 'pending' && 'loading...'}
    </div>
  </div>
);
