import Image from "next/image";

import { Container, Typography, Box, Stack, Grid } from "@mui/material";

export const metadata = {
  title: "Verb Definition | English in Eight Minutes",
  description:
    "Explore the definition of verbs in English with English in Eight Minutes. Learn how verbs describe actions, states, or occurrences. View examples and illustrations of action verbs like 'hear,' state verbs like 'love,' and occurrence verbs like 'happen.'",
  keywords:
    "English, Verb Definition, English grammar, English in Eight Minutes, action verbs, state verbs, occurrence verbs, grammar rules",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Verb Definition | English in Eight Minutes",
    description:
      "Explore the definition of verbs in English with English in Eight Minutes. Learn how verbs describe actions, states, or occurrences, providing details about various aspects of language. View examples and illustrations of action verbs like 'hear,' state verbs like 'love,' and occurrence verbs like 'happen.'",
    images: [
      {
        alt: "English in Eight Logo",
        url: "/images/english-logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/english-logo.svg",
        width: 1800,
        height: 1600,
        alt: "English in Eight Logo",
      },
    ],
  },
};

export default function VerbsDef() {
  return (
    <>
      <Container>
        <Stack>
          <Typography
            mb={2}
            component="h1"
            variant="h1"
            sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
          >
            Verb Definition
          </Typography>
        </Stack>
        <Stack>
          <Typography mb={2}>
            A verb is a word used to describe an action (e.g., hear), state
            (e.g., love), or occurrence (e.g., happen).
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                src="/images/hear.jpg"
                alt="picture of action verb hear"
                width={200}
                height={200}
              />

              <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                Hear
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                src="/images/love.jpg"
                alt="picture of state verb love"
                width={200}
                height={200}
              />

              <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                Love
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                src="/images/happen.jpg"
                alt="picture of action verb happen"
                width={200}
                height={200}
              />

              <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                Happen
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
