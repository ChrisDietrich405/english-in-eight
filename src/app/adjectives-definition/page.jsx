//DONE
import Image from "next/image";

import { Container, Stack, Typography, Box } from "@mui/material";

import styles from "../styles/content-page.module.css";

export default function AdjectiveDefinition() {
  return (
    <Container>
      <Stack className={styles.page_title}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Adjective Definition
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
          Adjectives are used to describe or modify nouns or pronouns, providing
          more information about their qualities, characteristics, or
          attributes. In these examples, the adjectives are in bold.
        </Typography>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Box>
          <Image
            style={{
              borderRadius: "4px",
              top: "50%",
              left: "50%",
            }}
            height={200}
            width={200}
            src="/images/happy.jpg"
            alt="happy child"
          />

          <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
            Happy
          </Typography>
        </Box>

        <Box>
          <Image
            style={{
              borderRadius: "4px",
              top: "50%",
              left: "50%",
            }}
            height={200}
            width={200}
            src="/images/small.jpg"
            alt="small dog"
          />
          <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
            Small
          </Typography>
        </Box>

        <Box>
          <Image
            style={{
              borderRadius: "4px",
              top: "50%",
              left: "50%",
            }}
            height={200}
            width={200}
            src="/images/strong.jpg"
            alt="strong person"
          />
          <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
            Strong
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
