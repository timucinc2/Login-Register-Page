import "./App.css";
import Login from "./component/Login";
import "./SCSS/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Register from "./component/Register";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
