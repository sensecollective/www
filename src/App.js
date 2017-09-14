import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Nav, Navbar } from "react-bootstrap";

import "./App.css";
import RouteNavItem from "./components/RouteNavItem";
import Routes from "./Routes";


class App extends Component {
	render() {
		return (
			<div className="App container">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
              <Link to="/"><img src="logo_with_name.png" height="28px" /></Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<RouteNavItem href="/about">About</RouteNavItem>
							<RouteNavItem href="/faq">FAQ</RouteNavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes />
			</div>
		);
	}
}

export default App;
