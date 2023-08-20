//DONE
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
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image height={300} width={300} src="/child.jpg" alt="" />
          </div>
          <h3 className={styles.picture_subtitle}>Person - child</h3>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image height={300} width={300} src="/tajmahal.jpg" alt="" />
          </div>
          <h3 className={styles.picture_subtitle}>Place - Taj Mahal</h3>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={300}
              width={300}
              src="/thing-nouns-definition.jpg"
              alt=""
            />
          </div>
          <h3 className={styles.picture_subtitle}>Thing - Iphone</h3>
        </div>
      </div>
    </>
  );
}
