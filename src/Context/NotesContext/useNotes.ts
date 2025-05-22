import { useContext } from "react";
import { NotesContext } from "./NotesContext";

const useNotes = () => {
  return useContext(NotesContext);
};

export default useNotes;
