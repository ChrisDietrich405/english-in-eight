// import "../../../styles/pages/other-topics.scss";

export default function VersusDefinition() {
  return (
    <div className="expressions">
      <div className={styles.page_title}>
        <h2>Versus Definition</h2>
      </div>
      <div className={styles.page_body}>
        <p className="grammar-explanation-paragraph">
          In this section let's compare different topics in order to clear up
          any confusion. For example many students don't really understand the
          difference between the verbs talk and say or the verbs remember and
          remind.
        </p>
      </div>

      <div className={styles.content_wrapper}>
        <img
          src="../../../images/remember-versus-remind.jpg"
          className="other-topics-image"
          alt=""
        />

        <img
          src="../../../images/speak-versus-talk.png"
          className="other-topics-image"
          alt=""
        />
      </div>
    </div>
  );
}
