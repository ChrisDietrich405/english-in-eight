import Image from "next/image";
import styles from "../styles/content-page.module.css";

export const metadata = {
  title: "Adjective Definition | English in Eight Minutes",
  description:
    "Explore the definition of adjectives in English with English in Eight Minutes. Learn how adjectives modify nouns or pronouns",
  keywords:
    "English, Adjective Definition, English grammar, English in Eight Minutes, descriptive words, grammar rules",
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
    title: "Adjective Definition | English in Eight Minutes",
    description:
      "Explore the definition of adjectives in English with English in Eight Minutes. Learn how adjectives modify nouns or pronouns, providing details about qualities, characteristics, or attributes. View examples and illustrations of adjectives in action.",
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
          <Box>
            <Image
              style={{
                objectFit: "contain",
                borderRadius: "20%",
                top: "50%",
                left: "50%",
              }}
              height={250}
              width={250}
              src="/images/happy.jpg"
              alt="happy child"
            />
          </Box>

          <Typography variant="h5" mt={2} sx={{ textAlign: "center" }}>
            Happy
          </Typography>
        </Box>

        <Box>
          <Image
            height={250}
            width={250}
            src="/images/small.jpg"
            alt="small dog"
          />
          <Typography variant="h5" mt={2}>
            Small
          </Typography>
        </Box>

        <Box>
          <Image
            height={250}
            width={250}
            src="/images/strong.jpg"
            alt="strong person"
          />
          <Typography variant="h5" mt={2}>
            Strong
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
