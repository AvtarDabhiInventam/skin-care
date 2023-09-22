import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import product1 from "../../images/product-1.png";
import Image from "next/image";

function RecommendationProduct() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} lg={4} className="course-item">
          <Card className="course-card">
            <div className="img-container">
              <Image  src={product1} className="course-img" />
            </div>
            <Card.Body>
              <Card.Title>Face Serum</Card.Title>
              <Card.Text>Face and Body Lotion</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="course-item">
          <Card className="course-card">
            <div className="img-container">
              <Image  src={product1} className="course-img" />
            </div>
            <Card.Body>
              <Card.Title>Face Serum</Card.Title>
              <Card.Text>Face and Body Lotion</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={4} className="course-item">
          <Card className="course-card">
            <div className="img-container">
              <Image  src={product1} className="course-img" />
            </div>
            <Card.Body>
              <Card.Title>Face Serum</Card.Title>
              <Card.Text>Face and Body Lotion</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RecommendationProduct;
