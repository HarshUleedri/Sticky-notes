import AddNotes from "./Components/AddNotes";
import Notes from "./Components/Notes";
import useNotes from "./Context/NotesContext/useNotes";

const App = () => {
  const { notes } = useNotes();

  return (
    <div className="py-20">
      <AddNotes />

      <div>
        {notes.map((note) => (
          <Notes note={note} />
        ))}
      </div>
    </div>
  );
};

export default App;
