import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Grow from "@material-ui/core/Grow";

function CreateArea(props) {
  const [state, setState] = useState({
    bool: false,
    x: 1
  });
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function steate() {
    setState(prevValue => {
      return { bool: true, x: 3 };
    });
  }
  return (
    <div>
      <form className="create-note">
        <Grow in={state.bool}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </Grow>
        <textarea
          name="content"
          onChange={handleChange}
          onClick={steate}
          value={note.content}
          placeholder="Take a note..."
          rows={state.x}
        />
        <Grow in={state.bool}>
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </Grow>
      </form>
    </div>
  );
}

export default CreateArea;
