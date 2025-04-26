import React from "react";

import "./reset.css";
import "./vars.css";
import "./App.css";
import Header from "./componentes/Header/Header.js";
import Sidebar from "./componentes/Sidebar/Sidebar.js";
import Footer from "./componentes/Footer/Footer.js";
import Main from "./componentes/Main/Main.js";

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
