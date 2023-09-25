"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Image from "next/image";
import { MdLogout, MdSearch, MdMenu } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";

function Header() {
  const stickyHeader = useRef();
  useEffect(() => {
    const fixedHeader = () => {
      const mainHeader = document.getElementById('mainHeader')
      let clientHeight = stickyHeader.current.clientHeight
      if (document.body.scrollTop > clientHeight) {
        mainHeader.classList.add('fixedTop')
      } else {
        mainHeader.classList.remove('fixedTop')
      }
    }
    window.addEventListener('scroll', fixedHeader,true)
  }, [window.screenY])
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className={`${styles.header} `} ref={stickyHeader} id="mainHeader">
          <Container>
            <Navbar.Brand href="/">
              <Image src={logo} alt="logo" height={90} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <MdMenu color="#000" fontSize={40} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto">
                  <Link to="/">
                    <Nav.Link href="#home" className={styles.navLink}>
                      Home
                    </Nav.Link>
                  </Link>
                  <Link to="/about">
                    <Nav.Link href="/about" className={styles.navLink}>
                      Chat
                    </Nav.Link>
                  </Link>
                  <Link to="/about">
                    <Nav.Link href="/about" className={styles.navLink}>
                    Scan Your Skin
                    </Nav.Link>
                  </Link>
                  <Link to="/contact">
                    <Nav.Link href="/contact" className={styles.navLink}>
                      Login
                    </Nav.Link>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
