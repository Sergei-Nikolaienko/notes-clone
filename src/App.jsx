import { useState, useMemo, useCallback, useEffect } from "react";
import uuid from "react-uuid";
import Localbase from "localbase";

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

  let db = new Localbase("db");

  useEffect(() => {
    db.collection("notes")
      .get()
      .then((notes) => {
        setNotes(notes);
      });
  }, []);

  const getVisibleNotes = () => {
    return notes.filter(
      (note) => note.text.includes(query) || note.title.includes(query)
    );
  };

  const visibleNotes = useMemo(getVisibleNotes, [notes, query]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      meta: Date.now(), //parsing is done in the component for flexibility
      text: "",
    };

    db.collection("notes").add(newNote);
  };

  const onDeleteNote = () => {
    setDialogue(true); //confirmation of deletion
  };

  const handleDeleteNote = (selectedNote) => {
    db.collection("notes").doc({ id: selectedNote }).delete();
    setSelectedNote(false);
  };

  const onEditNote = (editedNote) => {
    // db.collection("notes").doc({ id: editedNote.id }).set(editedNote);
  };

  const getSelectedNote = () => {
    return notes.find((note) => note.id === selectedNote); //selecting active note to be passed to workspace
  };

  const reset = useCallback(() => {
    setQuery("");
  }, []);

  return (
    <div className="App">
      <Header
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        selectedNote={selectedNote}
        allowEdit={allowEdit}
        setAllowEdit={setAllowEdit}
        query={query}
        setQuery={setQuery}
        onReset={reset}
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
