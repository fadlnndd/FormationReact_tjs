import React from "react";
import styles from "./Navbar.module.css";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <LinkContainer to="/">

          <NavBar.Brand>Home</NavBar.Brand>
          </LinkContainer> */}
          <Link to="/">Home</Link>
          <Nav className="me-auto">
            <Link to="/thumbnail">List</Link>
            {/* <Nav.Link href="#list">List</Nav.Link> */}
            <Link to="/new">New</Link>
            <Link to="/editor/1">Editor</Link>
            {/* <Nav.Link href="#new">New</Nav.Link> */}
            {/* <Nav.Link href="#editor">Editor</Nav.Link> */}
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
