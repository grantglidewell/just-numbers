import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../modules/numberStore'

import './input.css';

class Input extends Component {
  componentDidMount() {
    this.props.dispatch(fetchResults())
  }
  render() {
    return (
      <div className="wrapper">
      <div className="stack">
        <input
          type="button"
          className="incButton hover"
          onClick={() => this.props.dispatch({
            type: 'INC_NUMBER'
          })}
          value="+"
        />
        <input
          type="button"
          className="decButton hover"
          onClick={() => this.props.dispatch({
            type: 'DEC_NUMBER'
          })}
          value="-"
        />
      </div>
      <div>
        <input
          type="number"
          className="numberInput"
          value={this.props.numbers.number}
          onChange={evt => this.props.dispatch({
            type: 'INPUT_NUMBER',
            number: evt.target.value
          })}
        />
      </div>
      <div className="stack">
        <input
          type="button"
          className="subButton"
          onClick={() => this.props.dispatch({
            type: 'SUBMIT_NUMBER'
          })}
          value="ADD"
        />
      </div>
    </div>
    )
  }
};

export default connect(state => state)(Input)