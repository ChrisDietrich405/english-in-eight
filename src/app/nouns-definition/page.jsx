"use client";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Container, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

import styles from "../styles/content-page.module.css";

export default function NounDefinition() {
  return (
    <Container>
      <Stack className={styles.page_title}>
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: "2.5rem", color: "#cc1e1e;" }}
        >
          Noun Definition
        </Typography>
      </Stack>
      <Stack className={styles.page_body}>
        <Typography className={styles.grammar_explanation_paragraph}>
          A noun is a word that describes an object or set of objects, such as
          people, places or things.{" "}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>
          {/* <Image height={250} width={250} src="/images/child.jpg" alt="" /> */}
          <Typography className={styles.grammar_explanation_paragraph}>
            Child
          </Typography>
        </Item>
        {/* <Item>
          <Image height={250} width={250} src="/images/tajmahal.jpg" alt="" />
          <Typography className={styles.grammar_explanation_paragraph}>
            Taj Mahal
          </Typography>
        </Item> */}
        {/* <Item>
          <Image height={250} width={250} src="/images/iphone.jpg" alt="" />
          <Typography className={styles.grammar_explanation_paragraph}>
            Phone
          </Typography>
        </Item> */}
      </Stack>

      {/* <div className="container">
        <div className="row">
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image height={250} width={250} src="/images/child.jpg" alt="" />
            </div>
            <h3 className={styles.picture_subtitle}>Person - child</h3>
          </div>
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}></div>
            <h3 className={styles.picture_subtitle}>Place - Taj Mahal</h3>
          </div>
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}></div>
            <h3 className={styles.picture_subtitle}>Thing - Iphone</h3>
          </div>
        </div>
      </div> */}
    </Container>
  );
}
