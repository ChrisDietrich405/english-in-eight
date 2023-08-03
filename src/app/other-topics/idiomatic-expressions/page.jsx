// import styles from "../styles/content-page.module.css";

export default function ExpressionsDefinition() {
  return (
    <div className="expressions-container">
      <div className="page-title">
        <h2>Idiomatic Expressions Definition</h2>
      </div>
      <div className="body">
        <p className="grammar-explanation-paragraph">
          Idiomatic expressions are a type of informal language that have a
          meaning different from the meaning of the words in the expression.
        </p>
        {/* <div className="content-wrapper">
          <img
            src="../../../images/timeismoney.png"
            className="other-topics-image"
            aria-hidden="true"
          />
          <p>
            In the expression <strong>time is money</strong> we are not
            literally saying that time is actual currency. We are explaining
            that time is a valuable resource.
          </p>
        </div>
        <div className="content-wrapper"> */}
          <img
            src="../../../images/MindYourOwnBusiness.jpg"
            className="other-topics-image"
            aria-hidden="true"
          />
          <p>
            {" "}
            In the expression <strong>mind your own business</strong> we aren't
            referring to any business at all. We are telling another person to
            not invade our privacy
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}
