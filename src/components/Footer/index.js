"use client";
// import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Grid, Button, TextField } from "@mui/material";

// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";

export default function Footer() {
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");
  // const notify = () => toast("Email was successfully sent");

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     var templateParams = {
  //       email,
  //       message,
  //       to_name: "Chris",
  //     };

  //     emailjs
  //       .send(
  //         process.env.REACT_APP_SERVICE_ID,
  //         process.env.REACT_APP_TEMPLATE_ID,
  //         templateParams,
  //         process.env.REACT_APP_PUBLIC_KEY
  //       )
  //       .then(
  //         (result) => {
  //           // notify();
  //           setEmail("");
  //           setMessage("");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };
  return (
    <>
      <footer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            {" "}
            <div className={styles.logo}>
              <Link href="/" className={styles.footer_logo}>
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
          <Grid item xs={12} sm={6} md={8}>
            {" "}
            <h2>Contact us</h2>
            <form>
              {/* <form onSubmit={sendEmail} className="form"> */}
              <div className="mb-3">
                <label
                  htmlFor="nameControlInput"
                  className="form-label"
                ></label>
                <TextField
                  label="name"
                  variant="outlined"
                  id="nameControlInput"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="exampleFormControlInput1">Email</label> */}
                <TextField
                  sx={{ my: 4 }}
                  label="email"
                  variant="outlined"
                  id="nameControlInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-control`}
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                /> */}
              </div>
              <div className="mb-3">
                <TextField
                  onChange={(e) => setMessage(e.target.value)}
                  label="Add message here"
                  multiline
                  rows={4} // You can adjust the number of rows displayed.
                  variant="outlined"
                />
                {/* <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="exampleFormControlTextarea1"
                  placeholder="Add message here"
                  className={` form-control`}
                ></textarea> */}
              </div>
              {/* <ToastContainer /> */}
              {/* <div className="button-container text-center"> */}
              <Button variant="text">Submit</Button>

              {/* <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div> */}
            </form>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
