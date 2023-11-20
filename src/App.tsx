import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProgramsPage, GalleryPage, ContactPage } from "./pages";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/programs" element={<ProgramsPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
