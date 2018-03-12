import React from 'react';
import './input.css';

export default () => (
  <div className="wrapper">
    <div className="stack">
      <input
        type="button"
        className="incButton hover"
        onClick={() => console.log('+ click!')}
        value="+"
      />
      <input
        type="button"
        className="decButton hover"
        onClick={() => console.log('- click!')}
        value="-"
      />
    </div>
    <div>
      <input
        type="number"
        value={500}
        onKeyPress={event => (event.key === 'Enter' ? console.log('enter!') : null)}
      />
    </div>
    <div className="stack">
      <input
        type="button"
        className="subButton"
        onClick={() => console.log('sub click!')}
        value="GO"
      />
    </div>
  </div>
);

