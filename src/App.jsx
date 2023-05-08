import { useState } from "react";
import uuid from "react-uuid";

import "./App.scss";

import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      meta: Date.now(),
      text: "",
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (selectedNote) => {
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
    return notes.find((note) => note.id === selectedNote);
  };

  return (
    <div className="App">
      <Header
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        selectedNote={selectedNote}
        allowEdit={allowEdit}
        setAllowEdit={setAllowEdit}
      />
      <main className="main-content">
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          setAllowEdit={setAllowEdit}
        />
        <Workspace
          onEditNote={onEditNote}
          noteToEdit={getSelectedNote()}
          allowEdit={allowEdit}
        />
      </main>
    </div>
  );
}

export default App;
