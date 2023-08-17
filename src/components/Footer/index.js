"use client";
import { useState } from "react";
import Link from "next/link";
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
              toast.success("your estimate was scheduled successfully");
              // notify();
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
            }
          );
          set
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
      <footer>
        <Container>
          <ToastContainer />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <div className={styles.logo}>
                <Link
                  className={styles.link}
                  href="/"
                  // className={styles.footer_logo}
                >
                  <img
                    style={{ width: "130px" }}
                    src="/images/logo.svg"
                    alt="English in Eight Minutes Logo"
                  />
                </Link>
              </div>
              <div className={styles.email}>
                {" "}
                <p>englishineight@gmail.com</p>
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
                      className="form-control"
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
                    {/* <label htmlFor="exampleFormControlInput1">Email</label> */}
                    <TextField
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      className={`form-control`}
                      fullWidth
                      size="small"
                      sx={{ my: 4 }}
                      style={{ border: "none" }}
                      label="Email"
                      // variant="outlined"
                      // id="nameControlInput"
                      type="email"
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
                    <TextField
                      fullWidth
                      onChange={(e) => setMessage(e.target.value)}
                      label="Add message here"
                      multiline
                      rows={4}
                      variant="outlined"
                      id="exampleFormControlTextarea1"
                      placeholder="Add message here"
                      className={` form-control`}
                      style={{ border: "none" }}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" }, // Adjust the value as needed
                      }}
                    />
                    {"message" in error && (
                      <p className={styles.error_message}>
                        {error.message.join(",")}
                      </p>
                    )}
                  </div>
                  {/* <ToastContainer /> */}
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}
