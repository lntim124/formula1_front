
import "./index.css";
import "./App.css";

import{Routes,Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Principal from "./pages/Principal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Principal />} />
    </Routes>
  );
}

export default App;