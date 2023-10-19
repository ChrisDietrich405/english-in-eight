"use client";
import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Script from "next/script";

import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children, showBreadCrumbs = true }) {
  useEffect(() => {
    setShowBreadCrumbs()
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-186EYFYXC9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-186EYFYXC9');
          `}
      </Script>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar2 />
          {showBreadCrumbs ? <BreadCrumbs /> : ""}
          {children}

          <Footer />
        </body>
      </html>
    </>
  );
}
