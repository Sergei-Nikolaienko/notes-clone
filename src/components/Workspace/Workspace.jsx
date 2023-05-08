import "./Workspace.scss";

const Workspace = ({ noteToEdit, onEditNote }) => {
  if (!noteToEdit) {
    return (
      <strong className="workspace-area">Add and select a Note to edit</strong>
    );
  }

  const onEditField = (key, value) => {
    onEditNote({
      id: noteToEdit.id,
      [key]: value,
      meta: Date.now(),
    });
  };

  return (
    <div className="workspace-area">
      <div>{new Date().toLocaleString()}</div>
      <div className="title-input">
        <input
          className="input-field"
          id="note-title"
          value={noteToEdit.title}
          type="text"
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
      </div>
      <div className="text-input">
        <textarea
          className="input-field"
          id="note-text"
          rows="5"
          value={noteToEdit.text}
          onChange={(e) => onEditField("text", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Workspace;
