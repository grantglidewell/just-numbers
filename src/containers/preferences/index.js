import React, { Component } from "react";
import { connect } from "react-redux";

class Preferences extends Component {
  onSubmit = evt => {
    evt.preventDefault()
    return this.props.dispatch({
      type: 'UPDATE_PREFS',
      payload: {
        goal: document.forms.prefs.type.value === "goal",
        name: document.forms.prefs.name.value,
        diff: Number(document.forms.prefs.diff.value)
      }
    })
  };
  render() {
    return (
      <form name="prefs" >
        <label>Name</label>
        <input type="text" name="name" placeholder={this.props.numbers.name} />
        <br />
        <label>Increment By</label>
        <input type="number" name="diff" placeholder={this.props.numbers.diff} />
        <br />
        <label>Limit</label>
        <input
          type="radio"
          value="limit"
          name="type"
        />
        <label>Goal</label>
        <input
          type="radio"
          value="goal"
          name="type"
          defaultChecked
        />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default connect(state => state)(Preferences);
