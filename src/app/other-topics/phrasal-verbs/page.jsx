import Image from "next/image";
import { Card } from "@mui/material";
import styles from "../../styles/content-page.module.css";

export default function PhrasalVerbs() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Phrasal Verbs</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          Phrasal Verbs are expressions consisting of a verb and another
          element, typically either an adverb, as in <b>break down</b>, or a
          preposition, for example <b>see to</b>, or a combination of both, such
          as <b>look down on.</b>
        </p>
      </div>
      <Card style={{ padding: "16px", marginBottom: "60px" }}>
        <div className={styles.content_wrapper}>
          <Image
            height={220}
            width={300}
            src="/images/break-down.jpg"
            alt="Speak versus talk"
          />
          <p>
            In the phrasal verb <strong>break down</strong>, break is a verb and{" "}
            <strong>down</strong>
            &nbsp;is a preposition. <strong>Break down</strong> can mean that a
            vehicle stops functioning.
          </p>
        </div>
      </Card>
      <Card style={{ padding: "16px", marginBottom: "60px" }}>
        <div className={styles.content_wrapper}>
          <Image
            height={200}
            width={400}
            src="/images/fall.jpg"
            alt="Speak versus talk"
          />
          <p>
            In the phrasal verb <strong>fall for</strong>, fall is a verb and{" "}
            <strong>for</strong>
            &nbsp;is a preposition. <strong>Fall for</strong> can mean that
            someone falls in love.
          </p>
        </div>
      </Card>
      <div className={styles.divider}></div>
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
    </>
  );
}
