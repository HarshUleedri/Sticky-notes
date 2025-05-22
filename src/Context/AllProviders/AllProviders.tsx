import React from "react";
import NotexCxtProvider from "../NotesContext/NotexCxtProvider";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NotexCxtProvider>{children}</NotexCxtProvider>
    </>
  );
};

export default AllProviders;
