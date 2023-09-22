import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import Image from "next/image";
import styles from "../../styles/home.module.scss";

function RecommendationProduct() {
  return (
    <section className="common-padding pt-0">
      <Container>
       <h2 className="section-heading text-center">recommendation Product</h2>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <Card className={`${styles.productCard}`}>
              <div className="img-container">
                <Image src={product2} className="course-img" />
              </div>
              <Card.Body className="ps-0">
                <Card.Title className={`${styles.productCard_Title}`}>Face Serum</Card.Title>
                <Card.Text>Face and Body Lotion</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Card className={`${styles.productCard}`}>
              <div className="img-container">
                <Image src={product1} className="course-img" />
              </div>
              <Card.Body className="ps-0">
                <Card.Title className={`${styles.productCard_Title}`}>Face Moisturizer</Card.Title>
                <Card.Text>Face and Body Lotion</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Card className={`${styles.productCard}`}>
              <div className="img-container">
                <Image src={product3} className="course-img" />
              </div>
              <Card.Body className="ps-0">
                <Card.Title className={`${styles.productCard_Title}`}>Lip balm</Card.Title>
                <Card.Text>Face and Body Lotion</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RecommendationProduct;
