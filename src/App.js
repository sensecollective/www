import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import './App.css';
import RouteNavItem from './components/RouteNavItem';
import Routes from './Routes';


const App = () => (
  <div className="App container">
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><img src="cgt-logo-with-name.png" alt="logo" height="28px" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={() => window.open('http://search.cancergenetrust.org')}>Search</NavItem>
          <RouteNavItem href="/about">About</RouteNavItem>
          <RouteNavItem href="/faq">FAQ</RouteNavItem>
          <RouteNavItem href="/resources">Resources</RouteNavItem>
          <RouteNavItem href="/who">Who</RouteNavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes />
  </div>
);

export default App;
