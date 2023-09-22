"use client";
import Slider from "@/components/home/slider";
import SkinType from "@/components/home/skintype";
import RecommendationProduct from "@/components/home/recommendation-product";
export default function Home() {
  return (
    <main>
      <Slider />
      <SkinType/>
      <RecommendationProduct/>
    </main>      
  );
}
