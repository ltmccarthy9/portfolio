import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Nav from "./components/Nav";
import Home
 from "./pages/Home";
function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
