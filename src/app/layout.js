"use client";
import Header from "@/components/header/header";
import "../styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,500;1,700&family=Unica+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <BrowserRouter>
          <Header />
          {children}
          <Footer />
        </BrowserRouter>
      </body>
    </html>
  );
}
