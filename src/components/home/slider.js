import React from "react";
import { Button, Row, Col, Carousel, Card } from "react-bootstrap";
import banner1 from "../../images/banner-1.png";
import testimonial1 from "../../images/testimonial-1.png";
import Image from "next/image";
import styles from "../../styles/home.module.scss";

function Slider() {
  return (
    <>
      <Row className="max-height">
        <Col xs={12}>
          <Carousel indicators={false} className={`${styles.carousel}`}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={banner1}
                fluid
                style={{ objectFit: "cover" }}
              />
              <Carousel.Caption
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={`${styles.carouselCaption}`}
              >
                <h1> Love your skin, love yourself </h1>
                <p>Quality skincare products for men and women to your door</p>
                <Button variant="light" className="btn-white">
                  Buy Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={banner1}
                fluid
                style={{ objectFit: "cover" }}
              />

              <Carousel.Caption
                data-aos="fade-right"
                className={`${styles.carouselCaption}`}
              >
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="light" className="btn-white">
                  Buy Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={banner1}
                fluid
                style={{ objectFit: "cover" }}
              />

              <Carousel.Caption
                data-aos="fade-right"
                className={`${styles.carouselCaption}`}
              >
                <h1>Third slide label</h1>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <Button variant="light" className="btn-white">
                  Buy Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row  className="justify-content-md-center">
        <Col xs lg="4">
          <Card className="flex-row">
            <div>
            <Image variant="top" src={testimonial1} width={240}/>
            </div>
            <Card.Body>
              <Card.Text>
                I don’t wear makeup very often, but when I do I go for a
                natural, no-makeup look. This skin tint and concealer gives
                exactly that. It helps even out my skin tone and looks very
                natural.
              </Card.Text>
              <Card.Title>- Scarlett Blacke</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Slider;
