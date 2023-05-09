import React from "react";
import "./Header.scss";
import {
  MdOutlineDeleteForever,
  MdAddToQueue,
  MdEditNote,
} from "react-icons/md";

const Header = React.memo(
  ({
    onAddNote,
    onDeleteNote,
    selectedNote,
    allowEdit,
    setAllowEdit,
    query,
    setQuery,
    onReset,
  }) => {
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
          <button
            className="header__button"
            disabled={!selectedNote}
            onClick={() => setAllowEdit(!allowEdit)}
          >
            <MdEditNote />
          </button>
        </div>
        <div className="search-container">
          <input
            className="searchbar"
            value={query}
            type="text"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="header__button" onClick={onReset}>
            Reset
          </button>
        </div>
      </header>
    );
  }
);

export default Header;
