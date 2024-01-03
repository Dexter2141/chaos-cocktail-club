import React from "react";
import "./App.css";
import "./styles/style.css";

import Cocktails from "./components/cocktails";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="martini_glass.png"
              alt="logo"
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            CCC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cocktails">Cocktails</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#categories/new">New</NavDropdown.Item>
                <NavDropdown.Item href="#categories/classic">
                  Classic
                </NavDropdown.Item>
                <NavDropdown.Item href="#categories/fancy">
                  Fancy
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#categories/oftheday">
                  Of the day
                </NavDropdown.Item>
              </NavDropdown>
              {/* Add more Nav.Link components as needed */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md col-sm-6">
            <Cocktails />
          </div>
          <div className="col-md col-sm-6">
            <Cocktails />
          </div>
          <div className="col-md col-sm-6">
            <Cocktails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
