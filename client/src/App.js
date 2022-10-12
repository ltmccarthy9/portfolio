import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/resume" element={<Resume />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
}

export default App;
