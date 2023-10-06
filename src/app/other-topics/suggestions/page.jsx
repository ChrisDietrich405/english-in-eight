import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

import styles from "./styles.module.css";

const Suggestions = () => {
  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Typography
          variant="h4"
          sx={{
            width: "700px",
            margin: "0 auto",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          How can you be successful learning English and successful learning
          from English in Eight Minutes?
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
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Teach what you learn
                  </Typography>
                  <p>
                    Every time and I repeat every time you do a lesson, you need
                    to teach someone what you learned. The best way to learn is
                    to teach. If you don't know someone who is learning English,
                    talk to a family member. They love you so they will give you
                    ten minutes. They won't understand, but that doesn't matter.
                    What matters is that you explained the information.
                  </p>
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
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Focus on examples
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
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Fast Lessons
                  </Typography>
                  <p>
                    This website is intended to give you fast lessons and
                    exercises so that you can immediately learn and practice.
                    For a deeper understanding of each topic please watch the
                    accompanying videos at the bottom of each page.
                  </p>
                </CardContent>
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
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Find time
                  </Typography>
                  <p>
                    {" "}
                    You're busy right? Of course! Find moments when you can
                    review. In the bathroom while brushing your teeth you can
                    explain to yourself a few phrasal verbs you learned from the
                    website. At the grocery store waiting in line (waiting to
                    buy the food) get the notes that you put in your jacket.
                  </p>
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
                <CardContent className={styles.link_cards}>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Personal connection
                  </Typography>
                  <p>
                    When you review connect the material to YOUR family, job,
                    hobbies. For example while studing the verb "to be" you
                    would say "my wife <b>is</b> smart" and my children{" "}
                    <b>are</b> energetic.
                  </p>
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
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    color="text.secondary"
                    variant="h6"
                  >
                    Repeat
                  </Typography>
                  <p>
                    Repeat and repeat. Learning another language isn't easy.
                    It's hard work, but if you repeat the exercises again and
                    again you will be and feel more successful.
                  </p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Suggestions;
