import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

import styles from "./styles.module.css";

const Suggestions = () => {
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center" }}>
          How can you be successful using this website and successful learning
          English?
        </Typography>

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
                <CardContent>
                  <Typography gutterBottom color="text.secondary" variant="h6">
                    Fast Lessons
                  </Typography>
                  This website is intended to give you fast lessons and
                  exercises so that you can immediately learn and practice. For
                  a deeper understanding of each topic please watch the
                  accompanying videos at the bottom of each page.
                </CardContent>
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
                <CardContent>
                  <Typography gutterBottom color="text.secondary" variant="h6">
                    Fast Lessons
                  </Typography>
                  Don't focus too much on the explanations, read them once and
                  then go on to the examples. I guarantee after reading the
                  examples the explanations will make more sense (be easier to
                  understand).
                </CardContent>
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
                  {/* <Link href="/adjectives-definition" className={styles.link}>
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
                  </Link> */}
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
                  {/* <Link
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
                        src="images/time-is-money.svg"
                      />
                    </div>
                  </Link> */}
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
                  {/* <Link
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
                  </Link> */}
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
                  {/* <Link href="/other-topics/versus" className={styles.link}>
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
                  </Link> */}
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <ul className={styles.list_container}>
          <li></li>
          <li></li>
          <li>
            Every time and I repeat every time you do a lesson, you need to
            teach someone what you learned. The best way to learn is to teach.
            If you don't know someone who is learning English, talk to a family
            member. They love you so they will give you ten minutes. They won't
            understand, but that doesn't matter. What matters is that you
            explained the information.
          </li>
          <li>
            You're busy right? Of course! Find moments when you can review. In
            the bathroom while brushing your teeth you can explain to yourself a
            few phrasal verbs you learned from the website. At the grocery store
            waiting in line (waiting to buy the food) get the notes that are in
            your jacket.
          </li>
          <li>
            PERSONAL CONNECTION! When you review connect the material to YOUR
            family, job, hobbies. For example while studing the verb "to be" you
            would say "my wife <b>is</b> smart" and my children <b>are</b>{" "}
            energetic.
          </li>
          <li>
            Repeat and repeat. Learning another language isn't easy. It's hard
            work, but if you repeat the exercises again and again you will be
            and feel more successful.
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Suggestions;
