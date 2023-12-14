import Image from "next/image";
import { Card } from "@mui/material";

import { Container, Grid, Stack, Typography } from "@mui/material";

import styles from "../../styles/content-page.module.css";

export default function ExpressionsDefinition() {
  return (
    <Container style={{ marginBottom: "20px" }}>
      <Typography
        mb={2}
        component="h1"
        variant="h1"
        sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
      >
        Idiomatic Expressions Definition
      </Typography>
      <Stack>
        <Typography mb={2}>
          {" "}
          Idiomatic expressions are a type of informal language that have a
          meaning different from the meaning of the words in the expression.
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Card style={{ padding: "16px", marginBottom: "40px" }}>
            <Stack>
              <Stack className={styles.image_wrapper} mb={2}>
                <Image
                  width={300}
                  height={200}
                  src="/images/time-is-money.jpg"
                  alt="Time is money idiomatice expression pic"
                  className={styles.image_wrapper}
                  aria-hidden="true"
                />
              </Stack>
              <Typography>
                In the expression <strong>time is money</strong> we are not
                literally saying that time is actual currency. We are explaining
                that time is a valuable resource.
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Card style={{ padding: "16px", marginBottom: "20px" }}>
            <Stack>
              <Stack className={styles.image_wrapper} mb={2}>
                <Image
                  width={300}
                  height={200}
                  src="/images/mind-your-business.jpg"
                  alt="Mind your business idiomatice expression pic"
                  className={styles.image_wrapper}
                  aria-hidden="true"
                />
              </Stack>
              <Typography>
                {" "}
                In the expression <strong>mind your own business</strong> we
                aren't referring to any business at all. We are telling another
                person to not invade our privacy.
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
          src="https://www.youtube.com/embed/to8VoiepB3I?si=Bm00_lxelJfDjVjx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Stack>
    </Container>
  );
}
