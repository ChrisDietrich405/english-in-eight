import Image from "next/image";
import { Card } from "@mui/material";

import styles from "../../styles/content-page.module.css";

export default function VersusDefinition() {
  return (
    <div className="expressions">
      <div className={styles.page_title}>
        <h1>Versus Definition</h1>
      </div>
      <div className={styles.page_body}>
        <p className={styles.grammar_explanation_paragraph}>
          In this section let's compare different verbs in order to clear up any
          confusion. For example many students don't really understand the
          difference between the verbs talk and say or the verbs remember and
          remind.
        </p>
      </div>
      <Card style={{ padding: "16px", marginBottom: "20px" }}>
        <div className={styles.content_wrapper} style={{ display: "flex" }}>
          <Image
            height={300}
            width={300}
            src="/remember-versus-remind.jpg"
            alt="Remember versus remind"
          />
          <Image
            height={300}
            width={300}
            src="/speak-versus-talk.png"
            alt="Speak versus talk"
          />
        </div>
      </Card>
    </div>
  );
}
