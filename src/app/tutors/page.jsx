import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Card, Container } from "@mui/material";

import { FaTreeCity } from "react-icons/fa6";
import { FaRunning, FaAngry } from "react-icons/fa";

import styles from "../page.module.css";
import tutor_styles from "./tutor_styles.module.css";
const Tutors = () => {
  return (
    <Container>
      <Grid container spacing={4} my={6}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex", padding: "20px"
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "40px 10px"
            }}
          >
            <div className={styles.link_cards}>
              <div className={tutor_styles.tutor_container}>
                <div className={tutor_styles.tutor_details}>
                  <h4>Lena Long</h4>
                  <div className={tutor_styles.tutor_country_details}>
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src="/images/usflag.png"
                    />
                    <span>Baltimore, Maryland</span>
                  </div>
                  <p>Tutor since 2013</p>
                </div>
                <div className={tutor_styles.tutor_photo}>
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/images/tenjo-pic.jpg"
                  />
                </div>
              </div>
              <p className={tutor_styles.tutor_paragraph}>
                Hi! I'm Lena and I've been teaching English for more than 10
                years. Feel free to message to chat or get references.{" "}
              </p>

              <Link
                href="/nouns-definition"
                className={tutor_styles.tutor_link}
              >
                Schedule your first class.
              </Link>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.link_cards}>
              <Link href="/verbs-definition/home" className={styles.link}>
                <h3 className={styles.content_title_second_row}>Verbs</h3>
                <h4 className={styles.content_definition}>Action Verbs</h4>
                <p>Swim, Dance, Run</p>
                <div className={styles.run_icon_container}>
                  <FaRunning size="5em" />
                </div>
              </Link>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.link_cards}>
              <Link href="/adjectives-definition" className={styles.link}>
                <h3 className={styles.content_title_second_row}>Adjectives</h3>
                <h4 className={styles.content_definition}>Describing Words</h4>
                <p>Smart, Fast, Angry</p>
                <div className={styles.run_icon_container}>
                  <FaAngry size="5em" />
                </div>
              </Link>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} my={4}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.link_cards}>
              <Link
                href="/other-topics/idiomatic-expressions"
                className={styles.link}
              >
                <h3 className={styles.content_title_second_row}>
                  Idiomatic Expressions
                </h3>
                <h4 className={styles.content_definition}>
                  Informal Expressions
                </h4>
                <p>Time is money, Second wind</p>
                <div className={styles.react_icon_container}>
                  <Image
                    alt=""
                    width={325}
                    height={100}
                    src="/images/time-is-money.svg"
                  />
                </div>
              </Link>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.link_cards}>
              <Link href="/other-topics/phrasal-verbs" className={styles.link}>
                <h3 className={styles.content_title_second_row}>
                  Phrasal Verbs
                </h3>
                <h4 className={styles.content_definition}>
                  Verb/Preposition Combinations
                </h4>
                <p>Get up, Break down, Shut up</p>
                <div className={styles.react_icon_container}>
                  <Image
                    alt="get up icon"
                    width={200}
                    height={100}
                    src="images/get-up.svg"
                  />
                </div>
              </Link>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.link_cards}>
              <Link href="/other-topics/versus" className={styles.link}>
                <h3 className={styles.content_title_second_row}>Versus</h3>
                <h4 className={styles.content_definition}>
                  Similar But Different Verbs
                </h4>
                <p>Speak versus Talk</p>
                <div className={styles.react_icon_container}>
                  <Image
                    alt="speech bubble icon"
                    width={325}
                    height={100}
                    src="images/speak.svg"
                  />
                </div>
              </Link>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tutors;
