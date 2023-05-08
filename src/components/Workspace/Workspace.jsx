import "./Workspace.scss";

const Workspace = ({ onEditNote, noteToEdit }) => {
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
      <section className="edit-field">
        <div>{new Date().toLocaleString()}</div>
        <div className="title-input">
          <input
            autoFocus
            className="input-field"
            value={noteToEdit.title}
            type="text"
            onChange={(e) => onEditField("title", e.target.value)}
          />
        </div>
        <div className="text-input">
          <textarea
            className="input-field"
            rows="5"
            value={noteToEdit.text}
            onChange={(e) => onEditField("text", e.target.value)}
          />
        </div>
      </section>

      <div className="note-body">
        <h1>{noteToEdit.title}</h1>
        <p>{noteToEdit.text}</p>
      </div>
    </div>
  );
};

export default Workspace;
