"use client";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      className={`${styles.header} px-4 text-uppercase`}
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/">
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link href="/about" className={styles.navLink}>
              About
            </Nav.Link>
          </Link>
          <Link to="/faculty">
            <Nav.Link href="/faculty" className={styles.navLink}>
              Shop
            </Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link href="/about" className={styles.navLink}>
              Futures
            </Nav.Link>
          </Link>
          <Link to="/contact">
            <Nav.Link href="/contact" className={styles.navLink}>
              Scan Your Skin
            </Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className={styles.navLink}>
            More deets
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className={styles.navLink}>
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
