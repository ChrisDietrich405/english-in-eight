import Navbar from "../components/Navbar";
// import Head from "next/head";
import Script from "next/script";

import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "English in Eight Minutes",
  description:
    "The website, titled English in Eight Minutes is designed to provide quick and concise English language lessons. The content focuses on English phrasal verbs, grammar, and idiomatic expressions specific to the United States. The homepage features an engaging banner and offers links to various topics, including Nouns, Verbs, Adjectives, Idiomatic Expressions, Phrasal Verbs, and Versus (similar but different verbs). ",
  images: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "apple-icon.png",
  },
};

export default function RootLayout({ children }) {
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
        {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
        />
      </Head> */}

        {/* <Script
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      /> */}

        <body className={roboto.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
