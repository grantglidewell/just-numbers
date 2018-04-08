import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

class Results extends Component {
  render() {
    const displayResults = this.props.results.map(e => e.total);
    const today = new Date().getDay();
    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
    const labels = days.splice(today, 7);
    return displayResults && labels &&
    <React.Fragment>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: 'today',
              data: displayResults,
              backgroundColor: [
                "rgba(153, 102, 255, 0.2)"
              ]
            }
          ]
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </React.Fragment>
    
  }
}

export default connect(state => state.numbers)(Results);
