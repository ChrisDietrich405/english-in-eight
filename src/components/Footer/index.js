"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Grid, Button, TextField, Container } from "@mui/material";
import * as Validator from "validatorjs";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const validatorObject = {
    name,
    email,
    message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      const validator = new Validator(
        validatorObject,
        {
          name: "required",
          email: "required|email",
          message: "required",
        },
        {
          "required.name": "The name field is required",
          "required.email": "The email field is required",
          "required.message": "The message field is required",
        }
      );
      const validate = validator.passes();
      ///////////////////////////////////////////////////////////////////////////

      if (validate) {
        var templateParams = {
          email,
          message,
          to_name: "Chris",
        };

        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_ID
          )

          .then(
            (result) => {
              console.log("success");
              toast.success("your message was sent successfully");
              // notify();
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
            }
          );
        set;
      } else {
        setError(validator.errors.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us | English in Eight Minutes</title>
        <meta
          name="description"
          content="Have questions about English grammar rules? Contact our expert team at English in Eight Minutes. We're here to assist with your language queries and provide helpful insights. Connect with us today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Have questions about English grammar rules? Contact our expert team at English in Eight Minutes. We're here to assist with your language queries and provide helpful insights. Connect with us today!"
        />
        <meta
          property="og:image"
          content="https://dietrichlandcare.com/images/logo.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <footer className={styles.footer}>
        <Container>
          <ToastContainer />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              {" "}
              <div className={styles.logo}>
                <Link
                  // className={styles.link}
                  href="/"
                  // className={styles.footer_logo}
                >
                  <Image
                    className={styles.logo_image}
                    width="230"
                    height="230"
                    src="/images/logo.svg"
                    alt="English in Eight Minutes Logo"
                  />
                </Link>
              </div>
              <div className={styles.email}>
                {" "}
                <a href="mailto:englishineight@gmail.com">
                  englishineight@gmail.com
                </a>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className={styles.form_container}>
                <form onSubmit={sendEmail} className={styles.form}>
                  <h2>Contact us</h2>{" "}
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none" }}
                      size="small"
                      // id="nameControlInput"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" }, // Adjust the value as needed
                      }}
                    />
                    {"name" in error && (
                      <p className={styles.error_message}>
                        {error.name.join(",")}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none" }}
                      size="small"
                      // id="nameControlInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" }, // Adjust the value as needed
                      }}
                    />
                    {"email" in error && (
                      <p className={styles.error_message}>
                        {error.email.join(",")}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Add a Message"
                      multiline
                      rows={6}
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none", marginBottom: "58px" }}
                      size="small"
                      // id="nameControlInput"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" }, // Adjust the value as needed
                      }}
                    />
                    {"message" in error && (
                      <p
                        className={styles.error_message}
                        style={{ marginTop: "55px" }}
                      >
                        {error.message.join(",")}
                      </p>
                    )}
                  </div>
                  {/* <ToastContainer /> */}
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.form_button}
                    style={{ marginTop: "50px" }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1976d2"
            fill-opacity="1"
            d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,245.3C672,288,768,288,864,272C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </>
  );
}
