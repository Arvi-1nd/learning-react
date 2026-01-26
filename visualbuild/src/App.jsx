import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    let user = "Kesavan";
  return (
    <div className="App">
      <Header user = {user} />
        <Content/>
      <Footer user = "Murugesan"/>
    </div>
  );
};

export default App;
