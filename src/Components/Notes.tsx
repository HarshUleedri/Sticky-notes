import React, { useRef, useState } from "react";
import useNotes from "../Context/NotesContext/useNotes";

const Notes = () => {
  //states
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const offSetRef = useRef({ x: 0, y: 0 });

  const { notes } = useNotes();

  console.log(notes);

  //helper  function

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    console.log(e.clientX);
    offSetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - offSetRef.current.x,
      y: e.clientY - offSetRef.current.y,
    });
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div>
        {notes.map((note) => (
          <div
            key={note.id}
            onMouseDown={handleMouseDown}
            style={{
              position: "fixed",
              top: position.y,
              left: position.x,
              zIndex: 0,
            }}
            className={` relative rounded bg-amber-100 p-6 w-fit max-w-96 min-h-56 shadow-md ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            } `}
          >
            <div className="absolute top-1 right-2 text-xl">📌</div>
            <div className="description pt-4  break-words  ">
              {note.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
