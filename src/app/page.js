"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Slider from "./slider";
import AboutUs from "./aboutus";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutUs />
    </main>
  );
}
