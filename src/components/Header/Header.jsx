import "./Header.scss";
import {
  MdOutlineDeleteForever,
  MdAddToQueue,
  MdEditNote,
  MdSearch,
} from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="buttons-container">
        <button className="header__button">
          <MdAddToQueue />
        </button>
        <button className="header__button">
          <MdOutlineDeleteForever />
        </button>
        <button className="header__button">
          <MdEditNote />
        </button>
      </div>
      <input className="searchbar" type="text" placeholder="Search"></input>
    </header>
  );
};

export default Header;
