import { useState } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./components/pages/Dashboard";
import { User } from "./components/pages/User";
import { Contact } from "./components/pages/Contact";
import { Service } from "./components/pages/Service";
import { Container } from "./components/layout/Container";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Product } from "./components/pages/Product";
import { DeleResource } from "./components/pages/DeleteResource";
function App() {
  const [show, setShow] = useState(1);
  const [loading, setloading] = useState(true);

  function handleShow(value) {
    
    setShow(value);
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }
  return (
    <Router>
      <Navbar handleShow={handleShow} />
      <Container costumer="min-height">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                show={show}
                load={{ loading, setloading }}
                handleShow={handleShow}
              />
            }
          />
          <Route
            path="/user"
            element={
              <User
                show={show}
                load={{ loading, setloading }}
                handleShow={handleShow}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product
                show={show}
                load={{ loading, setloading }}
                handleShow={handleShow}
              />
            }
          />
          <Route
            path="/service"
            element={
              <Service
                show={show}
                load={{ loading, setloading }}
                handleShow={handleShow}
              />
            }
          />
          <Route path="/:resource/delete/:id" element={<DeleResource />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
