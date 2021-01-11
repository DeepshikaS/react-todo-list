import React, { Component } from "react";
import shortid from "shortid";
export default class Todoform extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form id="todo" className="content" onSubmit={this.handlesubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="enter task"
        />
        &nbsp; &nbsp; &nbsp;
        <button onClick={this.handlesubmit}>Add</button>
      </form>
    );
  }
}
