import Image from "next/image";
import styles from "../styles/content-page.module.css";

export default function NounDefinition() {
  return (
    <>
      <div className={styles.page_title}>
        <h1>Noun Definition</h1>
      </div>
      <div className={styles.page_body}>
        <h5 className={styles.grammar_explanation_paragraph}>
          A noun is a word that describes an object or set of objects, such as
          people, places or things.{" "}
        </h5>
      </div>

      <div className="container">
        <div className="row">
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image height={250} width={250} src="/images/child.jpg" alt="" />
            </div>
            <h3 className={styles.picture_subtitle}>Person - child</h3>
          </div>
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image
                height={250}
                width={250}
                src="/images/tajmahal.jpg"
                alt=""
              />
            </div>
            <h3 className={styles.picture_subtitle}>Place - Taj Mahal</h3>
          </div>
          <div className={`col-md-4 mb-4 ${styles.definition_picture}`}>
            <div className={styles.picture_wrapper}>
              <Image height={250} width={250} src="/images/iphone.jpg" alt="" />
            </div>
            <h3 className={styles.picture_subtitle}>Thing - Iphone</h3>
          </div>
        </div>
      </div>
    </>
  );
}
