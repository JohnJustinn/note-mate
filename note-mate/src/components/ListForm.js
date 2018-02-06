import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "../Actions";

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listValue: ""
    };
    this.addList = this.addList.bind(this);
    this.updateNewList = this.updateNewList.bind(this);
  }

  addList(event) {
    event.preventDefault();
    this.props.addList({
      value: this.state.listValue,
      completed: false
    });
    this.setState({
      listValue: ""
    });
  }

  updateNewList(event) {
    this.setState({
      listValue: event.target.value
    });
  }

  render() {
    return (
      <div className="ListForm">
        <form onSubmit={this.addList}>
          <input
            onChange={this.updateNewList}
            placeholder="new list"
            vale={this.state.todoValue}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, { addList })(ListForm);
