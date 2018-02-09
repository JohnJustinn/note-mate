import React, { Component } from "react";
import "../styling/App.css";
import ListForm from "./ListForm";
import Lists from "./Lists";
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
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
    fetchNotes: notesReducer.fetchNotes,
    error: notesReducer.error
  };
};

export default connect(mapStateToProps, { getNotes })(App);
