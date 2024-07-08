import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default App;
