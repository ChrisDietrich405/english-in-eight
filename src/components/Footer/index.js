"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Grid, Button, TextField, Container } from "@mui/material";

import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const notify = () => toast("Email was successfully sent");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hi");

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
          // notify();
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <footer>
        <Container>
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
                      fullWidth
                      size="small"
                      label="name"
                      variant="outlined"
                      id="nameControlInput"
                    />
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
                      label="email"
                      variant="outlined"
                      // id="nameControlInput"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                    />
                  </div>
                  {/* <ToastContainer /> */}
                  <Button type="submit" variant="text">
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
