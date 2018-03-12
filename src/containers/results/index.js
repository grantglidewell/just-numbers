import React from 'react';
import './results.css';

export default ({ props }) => (
  <ul>
    {props.results.map((r) => {
      return (<li>{r}</li>);
    })}
  </ul>
);


