"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Teamimg1 from "../../images/testimonial-1.png";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
  return (
    <>
      <div className={`${styles.testimonial_sec_div} common-padding`}>
        <Container className="zindex_div">
          <h2 className="section-heading">
            We dont just care about skin. <br />
            we care about you.
          </h2>
          <div className="testimonial_slider_div">
            <Slider {...settings}>
              <div>
                <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={`${styles.testimonial_box_div}`}>
                  <div className={`${styles.testimonial_img_div}`}>
                    <Image
                      src={Teamimg1}
                      alt="Image"
                      width={196}
                      height={242}
                    />
                  </div>
                  <div className={`${styles.testimonial_contain_div}`}>
                    <p className={`${styles.testimonial_para}`}>
                      I dont wear makeup very often, but when I do I go for a
                      natural, no-makeup look. This skin tint and concealer
                      gives exactly that. It helps even out my skin tone and
                      looks very natural.
                    </p>
                    <p className={`${styles.client_name}`}>- Scarlett Black</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
