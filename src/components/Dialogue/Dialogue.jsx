import "./Dialogue.scss";

const Dialogue = ({ setDialogue, selectedNote, handleDeleteNote }) => {
  return (
    <div className="dialogue">
      <div className="dialogue_message-wrapper">
        <h3>Are you sure?</h3>
        <div className="dialogue_buttons-wrapper">
          <button
            className="dialogue_button-yes"
            onClick={() => {
              handleDeleteNote(selectedNote);
              setDialogue(false);
            }}
          >
            Yes
          </button>
          <button
            className="dialogue_button-no"
            onClick={() => {
              setDialogue(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
