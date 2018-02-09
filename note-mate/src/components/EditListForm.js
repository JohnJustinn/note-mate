import React from "react";

const EditListForm = props => {
  let title = "test";
  let text = "text";

  const handleTitleChange = event => {
    title = event.target.value;
  };

  const handleTextChange = event => {
    text = event.target.value;
  };

  const submitEdits = () => {
    props.handleUpdateNote({
      id: props.list.id,
      title: title,
      text: text,
      user: props.list.user,
      notes: props.lists
    });
    title = "";
    test = "";
  };

  return (
    <form>
      <input
        value={props.title}
        name="title"
        type="text"
        placeholder={props.list.title}
        onChange={handleTitleChange}
      />
      <input
        className="input"
        value={props.text}
        name="text"
        type="text"
        placeholder={props.list.text}
        onchange={handleTextChange}
      />
      <button onClick={() => submitEdits()} type="button">
        Edit Note
      </button>
      <div>User: {props.list.user}</div>
    </form>
  );
};

export default EditListForm;
