import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Newproject } from "./components/pages/newproject";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
