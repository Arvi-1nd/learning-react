import React from "react";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import Rendering from "./components/Rendering";
import Showing from "./components/Showing";
import Respond from "./components/Respond";

const App = () => {
  return (
    <div>
      <MyButton />
      <Profile />
      <Rendering />
      <Showing />
      <Respond />
    </div>
  );
};

export default App;
