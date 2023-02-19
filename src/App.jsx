import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Newproject } from "./components/pages/newproject";
import { Container } from "./components/layout/Container";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Container costumer="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
