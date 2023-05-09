import { useState } from "react";
import uuid from "react-uuid";

import "./App.scss";

import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogue from "./components/Dialogue/Dialogue";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  const [dialogue, setDialogue] = useState(false);
  const [query, setQuery] = useState("");

  const getVisibleNotes = () => {
    return notes.filter(
      (note) => note.text.includes(query) || note.title.includes(query)
    );
  };

  const visibleNotes = getVisibleNotes();

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      meta: Date.now(), //parsing is done in the component for flexibility
      text: "",
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (selectedNote) => {
    setDialogue(true); //confirmation of deletion
  };

  const handleDeleteNote = (selectedNote) => {
    setNotes(notes.filter((note) => note.id !== selectedNote));
    setSelectedNote(false);
  };

  const onEditNote = (editedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === selectedNote) {
        return editedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const getSelectedNote = () => {
    return notes.find((note) => note.id === selectedNote); //selecting active note to pass to workspace
  };

  return (
    <div className="App">
      <Header
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        selectedNote={selectedNote}
        allowEdit={allowEdit}
        setAllowEdit={setAllowEdit}
        setQuery={setQuery}
      />
      <main className="main-content">
        <Sidebar
          notes={visibleNotes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          setAllowEdit={setAllowEdit}
        />
        <Workspace
          onEditNote={onEditNote}
          noteToEdit={getSelectedNote()}
          allowEdit={allowEdit}
        />
        {dialogue && (
          <Dialogue
            selectedNote={selectedNote}
            setDialogue={setDialogue}
            handleDeleteNote={handleDeleteNote}
          />
        )}
      </main>
    </div>
  );
}

export default App;
