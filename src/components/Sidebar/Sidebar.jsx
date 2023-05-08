import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="note-preview">
        <strong>Title</strong>
        <div className="preview-text-wrapper">
          <p className="preview-date-content">{new Date().toDateString()}</p>
          <p className="preview-text-content">Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
