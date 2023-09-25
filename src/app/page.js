"use client";
import Slider from "@/components/home/slider";
import SkinType from "@/components/home/skintype";
import RecommendationProduct from "@/components/home/recommendation-product";
import CareProduct from "@/components/care-product/care-product";
import Testimonial from "@/components/testimonial/testimonial";
import AboutProduct from "@/components/home/about-product";
export default function Home() {
  return (
    <main>
      <Slider />
      <SkinType/>
      {/* <RecommendationProduct/> */}
      <CareProduct/>
      <Testimonial/>
      <AboutProduct/>
    </main>      
  );
}
