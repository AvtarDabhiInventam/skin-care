import InnerBanner from "@/components/inner-banner";
import Image from "next/image";
import React from "react";
import shapeimg from "../../images/shape.png";
import SkinAbout from "@/components/about/skin-about";
import CareProduct from "@/components/care-product/care-product";
import OurTeam from "@/components/about/ourteam";
import Testimonial from "@/components/testimonial/testimonial";

const Page = () => {
  return (
    <>
      {/* Inner Banner Section */}
      <InnerBanner />

      {/* About Section */}
      <div className="common-padding about_sec_div">
        <div className="container">
        <h2 className="section-heading text-center">about this skin care brand</h2>
        <p className="common-para text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className="common-para text-center mb-0">
          It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. 
        </p>
        </div>
        <Image src={shapeimg} alt="shape" width={333} height={225} className="about_shape_img" />
      </div>

      <SkinAbout />

      <CareProduct/>

      <OurTeam />

      <Testimonial/>
    </>
  );
};

export default Page;
