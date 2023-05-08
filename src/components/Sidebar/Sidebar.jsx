import "./Sidebar.scss";

const Sidebar = ({ notes, setSelectedNote, selectedNote }) => {
  return (
    <div className="sidebar">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-preview ${note.id === selectedNote && "active"} `}
          onClick={() => setSelectedNote(note.id)}
        >
          <div className="preview-title">
            <strong>{note.title.substr(0, 20)}</strong>
          </div>
          <div className="preview-text-wrapper">
            <small className="preview-meta-content">
              {new Date(note.meta).toLocaleDateString("en-GB")}
            </small>
            <p className="preview-text-content">
              {note.text && note.text.substr(0, 20) + "..."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
