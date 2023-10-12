import Image from "next/image";
import { Card } from "@mui/material";

// const time = "../../../../public/images/time-is-money.jpg";

import styles from "../../styles/content-page.module.css";

export default function ExpressionsDefinition() {
  return (
    <div className="expressions-container">
      <div className={styles.page_title}>
        <h1>Idiomatic Expressions Definition</h1>
      </div>
      <div className="body">
        <p className={styles.grammar_explanation_paragraph}>
          Idiomatic expressions are a type of informal language that have a
          meaning different from the meaning of the words in the expression.
        </p>
        <Card style={{ padding: "16px", marginBottom: "20px" }}>
          <div className={styles.content_wrapper}>
            <Image
              width={300}
              height={200}
              src="/mind-your-business.jpg"
              className="other-topics-image"
              aria-hidden="true"
            />
            <p>
              In the expression <strong>time is money</strong> we are not
              literally saying that time is actual currency. We are explaining
              that time is a valuable resource.
            </p>
          </div>
        </Card>
        <Card style={{ padding: "16px", marginBottom: "20px" }}>
          <div className={styles.content_wrapper}>
            <Image
              width={300}
              height={200}
              src="/mind-your-business.jpg"
              className="other-topics-image"
              aria-hidden="true"
            />
            <p>
              {" "}
              In the expression <strong>mind your own business</strong> we
              aren't referring to any business at all. We are telling another
              person to not invade our privacy.
            </p>
          </div>
        </Card>
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
      </div>
    </div>
  );
}
