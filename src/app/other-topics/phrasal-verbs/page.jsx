import Image from "next/image";
import styles from "../../styles/content-page.module.css";
export default function PhrasalVerbs() {
  return (
    <>
      <div className={styles.page_title}>
        <h2>Phrasal Verbs</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          Phrasal Verbs are expressions consisting of a verb and another
          element, typically either an adverb, as in <b>break down</b>, or a
          preposition, for example <b>see to</b>, or a combination of both, such
          as <b>look down on.</b>
        </p>
      </div>
      <div className={styles.content_wrapper}>
        <Image
          height={200}
          width={300}
          src="/break-down.jpg"
          alt="Speak versus talk"
        />
        <p>
          In the phrasal verb <strong>break down</strong>, break is a verb and{" "}
          <strong>down</strong>
          &nbsp;is a preposition. <strong>Break down</strong> can mean that a
          vehicle stops functioning.
        </p>
      </div>
      <div className={styles.content_wrapper}>
        <Image
          height={200}
          width={300}
          src="/fall-for.jpg"
          alt="Speak versus talk"
        />
        <p>
          In the phrasal verb <strong>fall for</strong>, fall is a verb and{" "}
          <strong>for</strong>
          &nbsp;is a preposition. <strong>Fall for</strong> can mean that
          someone falls in love.
        </p>
      </div>
    </>
  );
}
