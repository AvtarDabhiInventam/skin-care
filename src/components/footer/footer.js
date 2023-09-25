import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../images/logo.png";
import styles from "./footer.module.scss";
import { FaCcMastercard } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";


// import MapContainer from "./MapContainer";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="site-footer"
      id="contact"
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Row className={`${styles.top_footer_div}`}>
          <Col xs={12} sm={6} md={6} lg={3} >
           <div className={`${styles.footer_mob_space_div}`}>
           <Image src={logo} height={110} alt="logo"/>
            <p className="common-para mt-4">
              Lorem ipsum dolorc sacsa sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum.
            </p>
            <Button variant="primary" className="common-btn">Contact us</Button>
           </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
              <div className={styles.footer_list}>
                <h4 className={styles.footer_list_title}> Free Yourself </h4>
                <ul className={styles.footer_link_group}>
                  <li className={styles.footer_link_group_item}> <a href='#'>Skin care</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Serum</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Moisturizer</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Lip balm</a> </li>
                </ul>
              </div>
            </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
              <div className={styles.footer_list}>
                <h4 className={styles.footer_list_title}> Company </h4>
                <ul className={styles.footer_link_group}>
                  <li className={styles.footer_link_group_item}> <Link href='/about'>About Us</Link> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Chat</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Scan</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Package Foods</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Contact Us</a> </li>
 
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className={styles.footer_list}>
                <h4 className={styles.footer_list_title}> Follow Us </h4>
                <ul className={styles.footer_link_group}>
                  <li className={styles.footer_link_group_item}> <a href='#'>Instagram</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Facebook</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Twitter</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Linkedin</a> </li>
                  <li className={styles.footer_link_group_item}> <a href='#'>Google</a> </li>
                </ul>
              </div>
            </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8} sm={6} xs={12}>
            <p className={`${styles.copyright_text}`}>
              Copyright &copy; 2023 All Rights Reserved by
              <a href="#copyright"> Inventam Company</a>
            </p>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <ul className={`${styles.socailIcons} list-unstyled text-end`}>
              <li>
                <a class="" href="#fb">
                Accepted Payments
                </a>
              </li>
              <li>
                <a class="twitter" href="#twitter">
                  <FaCcMastercard fontSize={25}/>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#dribble">
                  <RiVisaLine fontSize={25}/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
