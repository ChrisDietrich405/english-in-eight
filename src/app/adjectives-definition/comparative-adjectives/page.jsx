import Quiz from "../../../components/Quiz";

//DONE

export default function ComparativeAdjectives() {
  return (
    <div className="comparative-adjectives">
      <div className={styles.page_title}>
        <h2>Comparative Adjectives</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          To make the comparative form ('stronger' or 'more delicious'), the
          first thing we need to know is the number of syllables in the
          adjective.
        </p>
      </div>
      <div className={styles.page_body}>
        <h5>Adjectives with only one syllable</h5>
        <p>
          Normally if an adjective has one syllable, we add 'er' to make the
          comparative form.
        </p>
        <ul className="page-examples">
          <li>smart → smarter</li>
          <li>fast → faster</li>
          <li>tall → taller</li>
          <li>old → older</li>
        </ul>
        <p>
          There are some spelling changes. If the adjective ends in 'e', we
          don't add another 'e', just 'r'.
        </p>
        <ul className="page-examples">
          <li>brave → braver</li>
          <li>safe → safer</li>
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
        <p>However, some two syllable adjectives can use 'er'.</p>
        <ul className="page-examples">
          <li>quiet → quieter</li>
          <li>cruel → crueler</li>
          <li>simple → simpler</li>
          <li>quiet → quieter</li>
        </ul>
        <p>
          For adjectives with two syllables that end in 'y' we normally add 'er'
          (y generally changes to i).
        </p>
        <ul className="page-examples">
          <li>funny → funnier</li>
          <li>happy → happier</li>
          <li>ugly → uglier</li>
          <li>silly → sillier</li>
        </ul>
        <h5>Adjectives that have more than two syllables</h5>
        <p>
          Adjectives that have more than two syllables need to use 'most' to
          form their comparative.
        </p>
        <ul className="page-examples">
          <li>delicious → more delicious</li>
          <li>interesting → more more interesting</li>
          <li>exotic → more exotic</li>
          <li>intelligent → more intelligent</li>
        </ul>
        <p>Irregular adjectives</p>
        <p>
          There are also some irregular adjectives. We simply need to memorize
          them.
        </p>
        <ul className="page-examples">
          <li>good → better</li>
          <li>bad → worse</li>
          <li>far → further</li>
          <li>little → less</li>
          <li>much → more</li>
        </ul>
      </div>
      <Quiz
        title="Take a Quiz!"
        questions={[
          {
            title:
              "My Latin class is ______________ (interesting) than my English class. ",
            possibleAnswers: [
              { title: "more interesting", correctAnswer: true },
              { title: "interestinger" },
            ],
            userAnswer: "",
          },

          {
            title: "Marcus is ______________ (old) than Nia.",
            possibleAnswers: [
              { title: "older", correctAnswer: true },
              { title: "more old" },
            ],
            userAnswer: "",
          },
          {
            title: "She is ______________(quiet) than her brother.",
            possibleAnswers: [
              { title: "quietter" },
              { title: "quieter", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Buses are ________________ (large) than cars.",
            possibleAnswers: [
              { title: "largger" },
              { title: "larger", correctAnswer: true },
            ],
            userAnswer: "",
          },

          {
            title:
              "The roads here are  _______________ (narrow) than in Baltimore.",
            possibleAnswers: [
              { title: "narrower", correctAnswer: true },
              { title: "narroest" },
            ],
            userAnswer: "",
          },
          {
            title: "Dogs are _______________ (social) than cats",
            possibleAnswers: [
              { title: "more social", correctAnswer: true },
              { title: "socialer" },
            ],
            userAnswer: "",
          },
          {
            title: "Malcolm is _______________ (busy) than his brother.",
            possibleAnswers: [
              { title: "busier", correctAnswer: true },
              { title: "busyer" },
            ],
            userAnswer: "",
          },
          {
            title:
              "Demetrius is ________________ (ambitious) than his friends.",
            possibleAnswers: [
              { title: "ambitiouser" },
              { title: "more ambitious", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title:
              "My studio is  ________________  (colorful) than my art teacher's studio.",
            possibleAnswers: [
              { title: "colorfuler" },
              { title: "more colorful", correctAnswer: true },
            ],
            userAnswer: "",
          },
          {
            title: "Her car is _______________ (comfortable) than my car.",
            possibleAnswers: [
              { title: "more comfortable", correctAnswer: true },
              { title: "comfortabler" },
            ],
            userAnswer: "",
          },
        ]}
      ></Quiz>
    </div>
  );
}
