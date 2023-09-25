import React from 'react'
import styles from "../../styles/home.module.scss";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const AboutProduct = () => {
  return (
    <>
        <div className={`${styles.about_product_div}`}>
            <Container>
            <Row className="justify-content-md-end">
                    <Col xs lg="6">
                        <div className={`${styles.about_product_contain_box}`}>
                            <h6>Stop stressing out over buying your personal care products</h6>
                            <Button variant="primary" className="common-btn">Scan Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default AboutProduct
