import Image from "next/image";
import { Card, Container, Grid, Stack, Typography } from "@mui/material";

import styles from "../../styles/content-page.module.css";

export default function PhrasalVerbs() {
  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <Typography
          mb={2}
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
        >
          Phrasal Verbs Definition
        </Typography>
        <Stack>
          <Typography mb={2}>
            {" "}
            Phrasal Verbs are expressions consisting of a verb and another
            element, typically either an adverb, as in <b>look up</b> (search),
            or a preposition, for example <b>see to</b> (make sure of), or a
            combination of both, such as <b>look down on</b> (feel superior to).
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Card style={{ padding: "16px", marginBottom: "40px" }}>
              <Stack>
                <Stack className={styles.image_wrapper} mb={2}>
                  <Image
                    height={200}
                    width={400}
                    src="/images/break-down.jpg"
                    alt="Speak versus talk"
                  />
                </Stack>
                <Typography>
                  In the phrasal verb <strong>break down</strong>, break is a
                  verb and <strong>down</strong>
                  &nbsp;is a preposition. <strong>Break down</strong> can mean
                  that a vehicle stops functioning.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card style={{ padding: "16px", marginBottom: "20px" }}>
              <Stack>
                <Stack className={styles.image_wrapper} mb={2}>
                  <Image
                    height={200}
                    width={400}
                    src="/images/fall.jpg"
                    alt="Speak versus talk"
                  />
                </Stack>
                <Typography>
                  {" "}
                  In the phrasal verb <strong>fall for</strong>, fall is a verb
                  and <strong>for</strong>
                  &nbsp;is a preposition. <strong>Fall for</strong> can mean
                  that someone falls in love.
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Stack className="body">
          <iframe
            className={styles.iframe_wrapper}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nIlnxm8m2ec?si=BomnRA_Wd0bjpocr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Stack>
      </Container>
    </>
  );
}
