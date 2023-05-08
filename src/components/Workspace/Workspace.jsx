import "./Workspace.scss";

const Workspace = () => {
  return (
    <div className="main-area">
      <div>{new Date().toUTCString()}</div>
      <div className="title-input">
        <label htmlFor="note-title"></label>
        <input className="input-field" id="note-title" type="text" />
      </div>
      <div className="text-input">
        <label htmlFor="note-text"></label>
        <textarea className="input-field" id="note-text" type="text" />
      </div>
    </div>
  );
};

export default Workspace;
