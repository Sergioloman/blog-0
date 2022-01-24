import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home.js'
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container fluid className="App-total">
    <Router > 
        <Routes >
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
    </Router>
    </Container>
  );
}

export default App;
