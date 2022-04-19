import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
