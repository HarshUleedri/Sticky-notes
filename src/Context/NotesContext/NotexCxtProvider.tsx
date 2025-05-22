import { useState } from "react";
import { NotesContext, type NotesType } from "./NotesContext";

const NotexCxtProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<NotesType[]>([]);

  const addNotes = (value: NotesType) => {
    setNotes((prev: NotesType[]) => [...prev, value]);
  };

  const removeNotes = (id: number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    if (filteredNotes.length < 0) {
      setNotes(filteredNotes);
    }
    return;
  };
  const updateNotes = (value: NotesType, id: number) => {
    const updateNotes = notes.map((notes) => (notes.id === id ? value : notes));
    setNotes(updateNotes);
  };

  const data = {
    notes,
    addNotes,
    removeNotes,
    updateNotes,
  };

  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

export default NotexCxtProvider;
