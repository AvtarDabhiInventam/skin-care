"use client";
import React from "react";
import styles from "./about.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Teamimg1 from "../../images/team-imgs1.png";
import Teamimg2 from "../../images/team-img2.png";
import Teamimg3 from "../../images/team-img3.png";
import Teamimg4 from "../../images/team-img4.png";

const OurTeam = () => {
  return (
    <>
    <div className={`${styles.care_product_sec_div} common-padding bg-color`}>
        <Container>
          <h2 className="section-heading text-center">
          Meet Our Team Experts
          </h2>
          <Row className="rowgap_30">
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={Teamimg1} alt="Image" width={296} height={309} />
                <p className={`${styles.heading_text}`}>
                Kahh Dom
                </p>
                <p className={`${styles.team_qualification}`}>
                Manager
                </p>

              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={Teamimg2} alt="Image" width={296} height={309} />
                <p className={`${styles.heading_text}`}>
                Smith Walk
                </p>
                <p className={`${styles.team_qualification}`}>
                Chief masseusse
                </p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={Teamimg3} alt="Image" width={296} height={309} />
                <p className={`${styles.heading_text}`}>
                Wames Bond
                </p>
                <p className={`${styles.team_qualification}`}>
                Dermatologist
                </p>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className={`${styles.img_div}`}>
                <Image src={Teamimg4} alt="Image" width={296} height={309} />
                <p className={`${styles.heading_text}`}>
                Kalli Qulim
                </p>
                <p className={`${styles.team_qualification}`}>
                Dermatologist
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurTeam
