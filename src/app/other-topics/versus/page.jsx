import Image from "next/image";
import { Card, Container, Grid, Stack, Typography } from "@mui/material";

import styles from "../../styles/content-page.module.css";

export default function VersusDefinition() {
  return (
    <Container style={{ marginBottom: "20px" }}>
      <Typography
        mb={2}
        component="h1"
        variant="h1"
        sx={{ fontSize: "2.5rem", color: "#cc1e1e" }}
      >
        Versus Definition
      </Typography>
      <Stack>
        <Typography mb={2}>
          In this section let's compare different verbs in order to clear up any
          confusion. For example many students don't really understand the
          difference between the verbs talk and say or the verbs remember and
          remind.
        </Typography>
      </Stack>
      <Card style={{ padding: "16px", marginBottom: "40px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Image
              height={300}
              width={300}
              src="/images/remember-versus-remind.jpg"
              alt="Remember versus remind"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Image
              height={300}
              width={300}
              src="/images/speak-versus-talk.png"
              alt="Speak versus talk"
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
