import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Card, Container } from "@mui/material";

import { FaRunning, FaAngry } from "react-icons/fa";

import data from "../../data/tutors.json";

import styles from "./styles.module.css";

const Tutors = () => {
  return (
    <Container>
      <Grid container spacing={4} my={6}>
        {data.map((tutor) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                padding: "20px",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "40px 10px",
                }}
              >
                <div>
                  <div className={styles.tutor_container}>
                    <div className={styles.tutor_details}>
                      <h4>{tutor.name}</h4>
                      <div className={styles.tutor_country_details}>
                        <Image
                          alt=""
                          width={20}
                          height={20}
                          src="/images/usflag.png"
                        />
                        <span>Baltimore, Maryland</span>
                      </div>
                      <p>Tutor since {tutor.time}</p>
                    </div>
                    <div className={styles.tutor_photo}>
                      <Image
                        alt=""
                        width={100}
                        height={100}
                        src="/images/tenjo-pic.jpg"
                      />
                    </div>
                  </div>
                  <p className={styles.tutor_paragraph}>{tutor.description}</p>

                  <a
                    href={`https://wa.me/${tutor.whatsapp}`}
                    className={styles.tutor_link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Schedule your first class.
                  </a>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Tutors;
