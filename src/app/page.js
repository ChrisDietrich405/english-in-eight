import Image from "next/image";
import Link from "next/link";
import { Grid, Card, Container } from "@mui/material";

import { FaTreeCity } from "react-icons/fa6";
import { FaRunning, FaAngry } from "react-icons/fa";

import "./styles/globals.css";
import styles from "./page.module.css";
import RootLayout from "./layout";

export const metadata = {
  title: "Home | English in Eight Minutes",
  description:
    "The website, titled English in Eight Minutes is designed to provide quick and concise English language lessons. The content focuses on English phrasal verbs, grammar, and idiomatic expressions specific to the United States. The homepage features an engaging banner and offers links to various topics, including Nouns, Verbs, Adjectives, Idiomatic Expressions, Phrasal Verbs, and Versus (similar but different verbs). ",
  keywords:
    "English, language lessons, phrasal verbs, grammar, idiomatic expressions, United States",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Home | English in Eight Minutes",
    description:
      "The website, titled English in Eight Minutes is designed to provide quick and concise English language lessons. The content focuses on English phrasal verbs, grammar, and idiomatic expressions specific to the United States. The homepage features an engaging banner and offers links to various topics, including Nouns, Verbs, Adjectives, Idiomatic Expressions, Phrasal Verbs, and Versus (similar but different verbs). ",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 400,
        height: 300,
      },
      {
        url: "/images/english-logo.svg",
        width: 900,
        height: 800,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.banner}>
          <div className="image-container">
            <Image
              src="/images/flag.png"
              alt="Image Alt Text"
              layout="fill"
              loading="eager"
            />
            <div className="overlay-text">
              <h2>Welcome to English in Eight Minutes!</h2>
            </div>
          </div>
        </div>
        <div className={styles.intro_content}>
          {" "}
          <p>
            This website offers English lessons you can complete in less than 8
            minutes.
          </p>
          <p>
            Pick a topic, study a few minutes, and then do the corresponding
            exercise.
          </p>
          <p>
            The focus is on English phrasal verbs, grammar, and idiomatic
            expressions specific to <b> the United States. </b>
          </p>
        </div>
        <section className={styles.content_container}>
          <Container>
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
                    <Link href="/nouns-definition" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>Nouns</h3>
                      <h4 className={styles.content_definition}>
                        People, Places, Things
                      </h4>
                      <p>Woman, City, Car</p>
                      <div className={styles.run_icon_container}>
                        <FaTreeCity size="5em" />
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
                    <Link href="/verbs-definition/home" className={styles.link}>
                      <h3 className={styles.content_title_second_row}>Verbs</h3>
                      <h4 className={styles.content_definition}>
                        Action Verbs
                      </h4>
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
                      <h3 className={styles.content_title_second_row}>
                        Adjectives
                      </h3>
                      <h4 className={styles.content_definition}>
                        Describing Words
                      </h4>
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
                    <Link
                      href="/other-topics/phrasal-verbs"
                      className={styles.link}
                    >
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
                      <h3 className={styles.content_title_second_row}>
                        Versus
                      </h3>
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
        </section>
      </main>
    </>
  );
}
