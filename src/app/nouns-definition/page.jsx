import Image from "next/image";

import { Container, Typography, Box, Stack, Grid } from "@mui/material";

export const metadata = {
  title: "Noun Definition | English in Eight Minutes",
  description:
    "Learn about noun definition in English with English in Eight Minutes. Understand what a noun is and explore examples of people, places, and things as nouns.",
  keywords:
    "English, Noun Definition, English grammar, English in Eight Minutes",
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
    title: "Noun Definition | English in Eight Minutes",
    description:
      "Learn about noun definition in English with English in Eight Minutes. Understand what a noun is and explore examples of people, places, and things as nouns.",
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

export default function NounDefinition() {
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
            Noun Definition
          </Typography>
        </Stack>
        <Stack>
          <Typography mb={2}>
            A noun is a word that describes an object or set of objects, such as
            people, places or things.{" "}
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                height={200}
                width={200}
                src="/images/child.jpg"
                alt="child"
              />

              <Typography variant="h5" mt={2}>
                Person - child
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                height={200}
                width={200}
                src="/images/tajmahal.jpg"
                alt="Taj Mahal"
              />

              <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                Place - Taj Mahal
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  borderRadius: "4px",
                  top: "50%",
                  left: "50%",
                }}
                height={200}
                width={200}
                src="/images/iphone.jpg"
                alt="phone"
              />

              <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
                Thing - Phone
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
