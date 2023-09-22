"use client";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Image from "next/image";
import { MdLogout, MdSearch } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  return (
    <Navbar expand="lg" className={`${styles.header} px-4 text-uppercase`}>
      <Navbar.Brand href="#home">
        <Image src={logo} alt="logo" height={90} />
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
            <MdSearch fontSize={30} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className={styles.navLink}>
            <BiSolidUser fontSize={30} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className={styles.navLink}>
            <MdLogout fontSize={30} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
