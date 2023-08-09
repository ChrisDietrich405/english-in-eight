import Image from "next/image";
import styles from "../../styles/content-page.module.css";
export default function VersusDefinition() {
  return (
    <div className="expressions">
      <div className={styles.page_title}>
        <h2>Versus Definition</h2>
      </div>
      <div className={styles.page_body}>
        <h3 className={styles.grammar_explanation_paragraph}>
          In this section let's compare different topics in order to clear up
          any confusion. For example many students don't really understand the
          difference between the verbs talk and say or the verbs remember and
          remind.
        </h3>
      </div>

      <div className={styles.content_wrapper} style={{ display: "flex"}}>
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
    </div>
  );
}
