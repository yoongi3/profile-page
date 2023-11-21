import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './pages/contact/Contact';
import GalleryPage from './pages/gallery/Gallery';
import HomePage from './pages/home/Home';
import ProgramsPage from './pages/program/Programs';

import './pages/GenPageStyle/GenPageStyle.css'

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
