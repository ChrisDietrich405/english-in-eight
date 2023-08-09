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
        <h3
          style={{ textAlign: "center" }}
          className={styles.grammar_explanation_paragraph}
        >
          A noun is a word that describes an object or set of objects, such as
          people, places or things{" "}
        </h3>
      </div>
      <div className={styles.definition_pictures_container}>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={300}
              width={300}
              src="/person-nouns-definition.jpg"
              alt=""
            />
          </div>
          <p className={styles.picture_subtitle}>Person - Terry Crews</p>
        </div>
        <div className={styles.definition_picture}>
          <div className={styles.picture_wrapper}>
            <Image
              height={300}
              width={300}
              src="/place-nouns-definition.jpg"
              alt=""
            />
          </div>
          <p className={styles.picture_subtitle}>Place - Taj Mahal</p>
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
          <p className={styles.picture_subtitle}>Thing - Iphone</p>
        </div>
      </div>
    </>
  );
}
