import Image from "next/image";
import styles from "../styles/content-page.module.css";

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
