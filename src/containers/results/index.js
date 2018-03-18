import React from 'react';
import {
  Bar
} from 'react-chartjs-2'
import './results.css';

export default (props) => (
  <React.Fragment>
    <Bar data = {
      {
        labels: ['mon', 'tue', 'wed'],
        datasets: [{
        label: 'Intake, water',
        data: [1, 2, 3],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ]
      }]
      }
    }
    /> 
  </React.Fragment>
);