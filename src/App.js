import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Playground</h1>
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
