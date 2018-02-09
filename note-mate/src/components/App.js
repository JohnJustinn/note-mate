import React, { Component } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import Lists from "./components/Lists";
import { connect } from 'react-redux';
import { getNotes } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
       <header className="Header">
         <h1 classname="title">Note-Mate</h1>
        <ListForm />
        </header>
        {this.props.fetchNotes ? (
          <img src={logo} className="app-logo" alt="logo" />
        ) : (
          <Lists lists={ this.props.lists } />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: noteReducer.notes,
    fetchNotes: notesReducer.fetchNotes,
    error: notesReducer.error
  };
};

export default connect(mapStateToProps, { getNotes })(App);
