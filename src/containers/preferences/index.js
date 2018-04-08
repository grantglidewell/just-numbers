import React, { Component } from "react";
import { connect } from "react-redux";

import { updateOptions, saveOptions } from "../../modules/numberStore";

import './styles.css'

class Preferences extends Component {
  onSubmit = evt => {
    evt.preventDefault();
    return this.props.dispatch(saveOptions(this.props));
  };
  onChange = evt => {
    this.props.dispatch(updateOptions({ [evt.target.name]: evt.target.value }));
  };
  render() {
    return (
      <form name="prefs" className="formWrapper">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.onChange}
        />
        <label>Increment By</label>
        <input
          type="number"
          name="diff"
          value={this.props.diff}
          onChange={this.onChange}
        />
        <label>Limit</label>
        <input
          type="radio"
          value={false}
          name="goal"
          checked={this.props.goal === 'false'}
          onChange={this.onChange}
        />
        <label>Goal</label>
        <input
          type="radio"
          value={true}
          name="goal"
          checked={this.props.goal === 'true'}
          onChange={this.onChange}
        />
        <label>Total</label>
        <input
          type="number"
          name="total"
          value={this.props.total}
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>Save</button>
      </form>
    );
  }
}

export default connect(state => state.numbers)(Preferences);
