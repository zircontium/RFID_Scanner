import "./App.css";
import Ui from "./Components/Ui";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddDevice from "./Components/AddDevice";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Ui />} />
          <Route path="/adddevice" element={<AddDevice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
