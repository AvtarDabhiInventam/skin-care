import React from "react";
import aboutbannerimg from "../../images/about-desk-banner.png";
import Image from "next/image";
import styles from "./innerbanner.module.scss";

const InnerBanner = () => {
  return (
    <>
      <div className={`${styles.inner_banner_main_div}`}>
        <Image src={aboutbannerimg} alt="Banner" width={1920} height={1000} />
        <div className={`${styles.banner_contain_div}`}>
            <h2 className={`${styles.banner_heading}`}>A new PHILOSOPHY on SKINCARE.</h2>
        </div>
      </div>
    </>
  );
};

export default InnerBanner;
