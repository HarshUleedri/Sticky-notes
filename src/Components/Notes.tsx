import React, { useEffect, useRef, useState } from "react";
import type { NotesType } from "../Context/NotesContext/NotesContext";

interface NotesProps {
  note: NotesType;
}
let globalZIndex = 1;

const Colors = [
  "#FFF9C4",
  "#F8BBD0",
  "#C8E6C9",
  "#B3E5FC",
  "#E1BEE7",
  "#FFFBCC",
];

const Notes = ({ note }: NotesProps) => {
  const [randomColor] = useState(() =>
    Math.floor(Math.random() * Colors.length)
  );
  //states
  const [position, setPosition] = useState({
    x: Math.floor(Math.random() * 500) + 1,
    y: Math.floor(Math.random() * 300) + 1,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const offSetRef = useRef({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(0);

  //helper  function

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    globalZIndex += 1;
    setZIndex(globalZIndex);
    offSetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offSetRef.current.x,
        y: e.clientY - offSetRef.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div>
      <div className="relative  select-none ">
        <div
          key={note.id}
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            zIndex: zIndex,
            backgroundColor: `${Colors[randomColor]}`,
          }}
          className={` relative rounded  p-6 w-56 min-h-56 shadow-md ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } `}
        >
          <div className="absolute top-1 right-2 text-xl">📌</div>
          <div className="description pt-4  break-words  ">
            {note.description}
          </div>
          <div className="absolute top-2 left-2 text-xs">
            {note.createdAt.toLocaleString("en-US", {
              day: "2-digit",
              month: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
