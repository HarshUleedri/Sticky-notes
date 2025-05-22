import { createContext } from "react";

export interface NotesType {
  id: number;
  description: string;
  createdAt: Date;
}

interface NotesContextType {
  notes: NotesType[];
  addNotes: (value: NotesType) => void;
  removeNotes: (id: number) => void;
  updateNotes: (value: NotesType, id: number) => void;
}

export const NotesContext = createContext<NotesContextType>({
  notes: [],
  addNotes: () => {},
  removeNotes: () => {},
  updateNotes: () => {},
});
