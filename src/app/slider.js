import React from "react";
import { Button, Container, Row, Col, Carousel, Image } from "react-bootstrap";

function Slider() {
  return (
    <Row className="max-height">
      <Col xs={12} className="div-col">
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://raw.githubusercontent.com/TidbitsJS/University-Website/d54187818bc4ae4c579f518dda823a7cbce3b64a/src/images/slide-01.jpg"
              alt="First slide"
              fluid
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption
              className="text-center"
              data-aos="fade-down"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <h1> Love your skin, love yourself </h1>
              <p>Love your skin, love yourself</p>
              <Button variant="danger" style={{ marginBottom: 10 }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://raw.githubusercontent.com/TidbitsJS/University-Website/d54187818bc4ae4c579f518dda823a7cbce3b64a/src/images/slide-01.jpg"
              alt="Third slide"
              fluid
              style={{ objectFit: "cover" }}
            />

            <Carousel.Caption data-aos="fade-right" className="text-center">
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="danger" style={{ marginBottom: 10 }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://raw.githubusercontent.com/TidbitsJS/University-Website/d54187818bc4ae4c579f518dda823a7cbce3b64a/src/images/slide-01.jpg"
              alt="Third slide"
              fluid
              style={{ objectFit: "cover" }}
            />

            <Carousel.Caption data-aos="fade-right" className="text-center">
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button variant="danger" style={{ marginBottom: 10 }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Slider;
