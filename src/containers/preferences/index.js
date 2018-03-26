import React, { Component } from "react";
import { connect } from "react-redux";

class Preferences extends Component {
  render() {
    return (
      <form>
        <label>Name</label>
        <input type="text" placeholder="name" />
        <br />
        <label>Increment By</label>
        <input type="number" placeholder="50" />
        <br/>
        <label>Limit</label>
        <input type="radio" value="limit" name="type" checked />
        <label>Goal</label>
        <input type="radio" value="goal" name="type" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default connect(state => state)(Preferences);
