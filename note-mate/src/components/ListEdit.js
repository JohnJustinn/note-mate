import React from "react";

export default function ListEdit(props) {
  return (
    <div>
      <span onClick={() => props.handleShowNote({})}> [ x ] </span>
      <h4>{props.selected.title}</h4>
      <div>{props.selected.text}</div>
      <div>{props.selected.user}</div>}
      <button onClick={() => props.handleDeleteNote()}>{`Delete ${
        props.selected.title
      }`}</button>
      <button onclick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.title
      }`}</button>
    </div>
  );
}
