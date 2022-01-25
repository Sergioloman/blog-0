import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home.js'
import { Container } from "react-bootstrap";
import Navigation from "./components/Nav.Bar/Nav";
import Archive from "./pages/Archive";
import Auth from "./pages/Auth";


function App() {
  return (
    <Container fluid className="App-total">
    <Router > 
      <Navigation/>
        <Routes >
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Archive" element={<Archive/>}></Route>
          <Route exact path="/Auth" element={<Auth/>}></Route>
        </Routes>
    </Router>
    </Container>
  );
}

export default App;
