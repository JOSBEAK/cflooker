import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user/:handle" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
