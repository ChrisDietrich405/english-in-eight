"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Script from "next/script";

import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import "./styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {

  const pathname = usePathname();

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
          <Navbar />
          {pathname !== "/" && <BreadCrumbs />}
          {children}

          <Footer />
        </body>
      </html>
    </>
  );
}
