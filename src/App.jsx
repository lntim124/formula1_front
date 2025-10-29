import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Principal from "./pages/Principal.jsx"; // tu dashboard
import "./index.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Principal />} />
    </Routes>
  );
}

export default App;