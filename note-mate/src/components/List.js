import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../Actions";

class List extends Component {
  toggleComplete() {
    this.props.toggleComplete(this.props.index);
    console.log(this.props.list.completed);
  }

  render() {
    return (
      <li className="List">
      {this.props.list.value}
      </li>
    );
  }
}

export default connect(null, { toggleComplete })(List);
