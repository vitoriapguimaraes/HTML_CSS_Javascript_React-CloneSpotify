import React from "react";

import "./reset.css";
import "./vars.css";
import "./App.css";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
      <Main></Main>
    </div>
  );
}

export default App;
