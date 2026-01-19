import React from "react";
import AdminPanel from "./AdminPanel";


const Rendering = () => {
  const isLoggedin = true;

  return <div>{ isLoggedin && <AdminPanel/>}</div>;
};

export default Rendering;
