import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import {About} from './Components/about';
import {Contact} from './Components/contact';
import {Home} from './Components/home';

function App(){
    return (
        <BrowserRouter>
        <div className="App">
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link as={Link} to ="/About"> About</Nav.Link>
      <Nav.Link as={Link} to ="/Contact"> Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    <div>
      <Routes>
          <Route path="/about" element= {<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/" element= {<Home/>}/>
      </Routes>
      </div>
      </div>
      </BrowserRouter>
    );
}

export default App;
