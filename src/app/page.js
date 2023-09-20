"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Slider from "./slider";
import AboutUs from "./aboutus";
import Footer from "@/components/footer/footer";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutUs />
      <Footer/>
      <Button>Button</Button>
    </main>
  );
}
