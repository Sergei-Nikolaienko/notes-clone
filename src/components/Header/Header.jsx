import "./Header.scss";
import {
  MdOutlineDeleteForever,
  MdAddToQueue,
  MdEditNote,
} from "react-icons/md";

const Header = ({ onAddNote, onDeleteNote, selectedNote }) => {
  return (
    <header className="header">
      <div className="buttons-container">
        <button className="header__button" onClick={onAddNote}>
          <MdAddToQueue />
        </button>
        <button
          className="header__button"
          onClick={() => {
            onDeleteNote(selectedNote);
          }}
          disabled={!selectedNote}
        >
          <MdOutlineDeleteForever />
        </button>
        <button className="header__button" disabled={!selectedNote}>
          <MdEditNote />
        </button>
      </div>
      <input className="searchbar" type="text" placeholder="Search"></input>
    </header>
  );
};

export default Header;
