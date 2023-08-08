//DONE

import Quiz from "../../../components/Quiz";

import styles from "../../styles/content-page.module.css";

export default function SuperlativeAdjectives() {
  return (
    <div className="superlative-adjectives">
      <div className={styles.page_title}>
        <h2>Superlative Adjectives</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          Superlative adjectives are used to compare three or more nouns,
          indicating the highest or most extreme degree of a particular quality.
          They are used when you want to highlight the greatest level of a
          certain characteristic within a group of items or individuals.
          Superlative adjectives typically end in "-est" for one-syllable
          adjectives or use "most" before the adjective for longer adjectives.
        </p>
      </div>
      <div className={styles.page_body}>
        <h5>Adjectives with one syllable</h5>
        <p>
          If an adjective has one syllable, we usually add 'est' to make the
          superlative form.
        </p>
        <ul className="page-examples">
          <li>smart → smartest</li>
          <li>fast → fastest</li>
          <li>tall → tallest</li>
          <li>old → oldest</li>
        </ul>
        <p>
          There are some spelling changes. If the adjective ends in 'e', we
          don't add another 'e', just 'r'.
        </p>
        <ul className="page-examples">
          <li>brave → bravest</li>
          <li>safe → safest</li>
        </ul>
        <p>
          If there is one vowel followed by one consonant at the end of the
          adjective, we often double the consonant.
        </p>
        <ul className="page-examples">
          <li>sad → sadder</li>
          <li>hot → hotter</li>
          <li>big → bigger</li>
        </ul>

        <p>If the adjective ends in 'e', we don't add another 'e', just 'r'.</p>
        <ul className="page-examples">
          <li>brave → bravest</li>
          <li>safe → safest</li>
        </ul>
        <p>
          There are some adjectives that we need to use 'more' with, even though
          they only have one syllable. Adding -er is incorrect for these verbs.
        </p>
        <ul className="page-examples">
          <li>real → more real (NOT realer)</li>
          <li>fun → more fun (NOT funner)</li>
        </ul>
        <h5>Adjectives with two syllables</h5>
        <p>Some adjectives with two syllables use 'more'.</p>
        <ul className="page-examples">
          <li>thoughtful → more thoughtful</li>
          <li>peaceful → more peaceful</li>
        </ul>
        <p>However, some two syllable adjectives can use 'est'.</p>
        <ul className="page-examples">
          <li>quiet → quietest</li>
          <li>cruel → cruelest</li>
          <li>simple → simplest</li>
          <li>quiet → quietest</li>
        </ul>
        <p>
          For adjectives with two syllables that end in 'y' we normally add 'er'
          (y generally changes to i).
        </p>
        <ul className="page-examples">
          <li>funny → funniest</li>
          <li>happy → happiest</li>
          <li>ugly → ugliest</li>
          <li>silly → silliest</li>
        </ul>
        <h5>Adjectives with more than two syllables</h5>
        <p>
          Adjectives that have more than two syllables need to use 'most' to
          form their superlative.
        </p>
        <ul className="page-examples">
          <li>delicious → most delicious</li>
          <li>interesting → most interesting</li>
          <li>exotic → most exotic</li>
          <li>intelligent → most intelligent</li>
        </ul>
        <p>Irregular adjectives</p>
        <p>
          There are also some irregular adjectives. We simply need to memorize
          them.
        </p>
        <ul className="page-examples">
          <li>good → best</li>
          <li>bad → worst</li>
          <li>far → furthest</li>
          <li>little → least</li>
          <li>much → most</li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title: "Nia is the ___________________ (old) daughter.",
            possibleAnswers: [
              { title: "oldest", correctAnswer: true },
              { title: "most old" },
            ],
            userAnswer: "",
          },
          {
            title:
              "His car is the _______________ (comfortable) car I’ve ever driven.",
            possibleAnswers: [
              { title: "most comfortable", correctAnswer: true },
              { title: "comfortableist" },
            ],
            userAnswer: "",
          },
          {
            title: "Bia is the _______________ (quiet) person I've ever met.",
            possibleAnswers: [
              { title: "quietest", correctAnswer: true },
              { title: "quitest" },
            ],
            userAnswer: "",
          },
          {
            title: "This restaurant has the ________________ food",
            possibleAnswers: [
              { title: "deliciouser" },
              { title: "most delicious", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "My math class is my ______________ (hard) class. ",
            possibleAnswers: [
              { title: "hardest", correctAnswer: true },
              { title: "most hardest" },
            ],
            userAnswer: "",
          },
          {
            title:
              "The roads in this neighborhood are the _______________ (narrow) in the city.",
            possibleAnswers: [
              { title: "narroest" },
              { title: "narrowest", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Malcolm is the _______________ (busy) man in his office.",
            possibleAnswers: [
              { title: "busiest", correctAnswer: true },
              { title: "busyest" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Pigs are the ________________________(intelligent) farm animals.",
            possibleAnswers: [
              { title: "most intelligent", correctAnswer: true },
              { title: "intelligentest" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Demetrius is the ________________ (ambitious) director at his production company.",
            possibleAnswers: [
              { title: "ambitiousest" },
              { title: "most ambitious", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My dog is the  ________________  (cute) in my neighborhood.",
            possibleAnswers: [
              { title: "most cutest" },
              { title: "cutest", correctAnswer: true },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
