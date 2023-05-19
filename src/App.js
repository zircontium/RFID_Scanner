import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddDevice from "./Pages/AddDevice";
import Devices from "./Pages/Devices";
import DashSearch from "./Pages/DashSearch";
import DashInfo from "./Pages/DashInfo";
import FooterComp from "./Components/FooterComp";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashInfo />} />
          <Route path="/search" element={<DashSearch />} />
          <Route path="/adddevice" element={<AddDevice />} />
          <Route path="/devices" element={<Devices />} />
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;
