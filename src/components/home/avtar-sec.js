import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/home.module.scss";
import avtarImg from "../../images/avtar-product-img.png";
import Image from "next/image";
import shapeimg from "../../images/shape.png";

const Avtar = () => {
  return (
    <>
      <div className={`${styles.avtar_sec_div} about_sec_div`}>
        <Container>
          <Row>
          <Col md={7} className="align-items-center d-flex">
              <div className={`${styles.avtar_contain_div}`}>
                <h6>Lorem ipsum dolor sit</h6>
                <p className="common-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum
                </p>
                <Button variant="primary" className="common-btn">
                  Buy Now
                </Button>
              </div>
            </Col>
            <Col md={5}>
              <div className={`${styles.avtar_img_div}`}>
                <Image src={avtarImg} height={700} width={600} />
              </div>
            </Col>
            
          </Row>
        </Container>
        <Image src={shapeimg} alt="shape" width={333} height={225} className={`${styles.about_shape_img} about_shape_img`} />
      </div>
    </>
  );
};

export default Avtar;
