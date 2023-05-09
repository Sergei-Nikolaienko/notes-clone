import React from "react";
import "./Workspace.scss";

const Workspace = React.memo(({ onEditNote, noteToEdit, allowEdit }) => {
  if (!noteToEdit) {
    return <strong className="workspace-area">Select a Note to view</strong>;
  }

  const onEditField = (key, value) => {
    onEditNote({
      ...noteToEdit,
      [key]: value,
      meta: Date.now(),
    });
  };

  return (
    <div className="workspace-area">
      <div>{new Date().toLocaleString()}</div>
      <div className="title-input">
        <input
          type="text"
          autoFocus
          className="input-field"
          value={noteToEdit.title}
          disabled={!allowEdit}
          onChange={(e) => onEditField("title", e.target.value)}
        />
      </div>
      <div className="text-input">
        <textarea
          className="input-field"
          rows="5"
          value={noteToEdit.text}
          disabled={!allowEdit}
          onChange={(e) => onEditField("text", e.target.value)}
        />
      </div>
    </div>
  );
});

export default Workspace;
