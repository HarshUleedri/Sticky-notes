import { useState } from "react";
import useNotes from "../Context/NotesContext/useNotes";

const AddNotes = () => {
  const [note, setNote] = useState<string>("");

  const { addNotes } = useNotes();

  // helper function

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(() => e.target.value);
  };

  const handleOnAdd = () => {
    if (!note) return;
    const newNote = {
      id: new Date().getTime(),
      description: note,
      createdAt: new Date(),
    };
    addNotes(newNote);
    setNote("");
  };

  return (
    <div className="flex gap-4 items-start justify-center">
      <textarea
        value={note}
        placeholder="Add notes"
        className="border rounded border-gray-200 w-96 outline-none px-4 py-2"
        onChange={handleOnChange}
        id="notes"
      ></textarea>

      <button
        onClick={handleOnAdd}
        className="px-4 py-1 rounded cursor-pointer font-semibold bg-gray-200 "
      >
        Create notes
      </button>
    </div>
  );
};

export default AddNotes;
