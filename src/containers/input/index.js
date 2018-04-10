import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchResults } from '../../modules/numberStore'

import { addToToday, saveOptions } from "../../modules/numberStore";

import "./input.css";

class Input extends Component {
  componentDidMount() {}
  handleInput = evt => {
    this.props.dispatch(addToToday());
    return this.props.dispatch(saveOptions());
  };
  render() {
    let today = new Date().getDay()
    return (
      <div className="wrapper">
        <div className="stack">
          <input
            type="button"
            className="incButton hover"
            onClick={() =>
              this.props.dispatch({
                type: "INC_NUMBER"
              })
            }
            value="+"
          />
          <input
            type="button"
            className="decButton hover"
            onClick={() =>
              this.props.dispatch({
                type: "DEC_NUMBER"
              })
            }
            value="-"
          />
        </div>
        <div>
          <input
            type="number"
            className="numberInput"
            value={this.props.number}
            onChange={evt =>
              this.props.dispatch({
                type: "INPUT_NUMBER",
                number: evt.target.value
              })
            }
          />
        </div>
        <div className="stack">
          <input
            type="button"
            className="subButton"
            onClick={this.handleInput}
            value="ADD"
          />
        </div>
        <div className="displayToday">
          {this.props.results[today].total ? this.props.results[today].total : "0"}
        </div>
      </div>
    );
  }
}

export default connect(state => state.numbers)(Input);
