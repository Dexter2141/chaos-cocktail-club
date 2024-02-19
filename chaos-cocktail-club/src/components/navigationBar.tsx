import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import BrandLogo from "../images/cocktail_logo.png";
import { useState } from "react";
import "../styles/style.css";

export let searchQueryOut: string = "Search";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // Close the Navbar when a link is clicked
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = () => {
    searchQueryOut = searchQuery;
    console.log(searchQueryOut);
  };

  return (
    <Navbar
      bg="dark"
      expand="md"
      className="sticky-top border-bottom border-body navbar-dark z-index"
      expanded={expanded} // Control the collapse state
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={BrandLogo}
            alt="logo"
            width="25"
            height="25"
            className="d-inline-block align-top"
            style={{ filter: "invert(1)" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleNavItemClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#cocktails" onClick={handleNavItemClick}>
              Cocktails
            </Nav.Link>
            <Nav.Link href="#longdrinks" onClick={handleNavItemClick}>
              Longdrinks
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavItemClick}>
              About
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#categories/Classic"
                onClick={handleNavItemClick}
              >
                Classic
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#categories/Modern"
                onClick={handleNavItemClick}
              >
                Modern
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#categories/Virgin"
                onClick={handleNavItemClick}
              >
                Virgin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#categories/ByChaosClub"
                onClick={handleNavItemClick}
              >
                Created by ChaosClub
              </NavDropdown.Item>
            </NavDropdown>
            {/* Add more Nav.Link components as needed */}
          </Nav>
          <Form className="d-flex" role="search">
            <FormControl
              id="search"
              type="search"
              placeholder="Search"
              className="me-2 bg-light"
              aria-label="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Button variant="outline-light" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
