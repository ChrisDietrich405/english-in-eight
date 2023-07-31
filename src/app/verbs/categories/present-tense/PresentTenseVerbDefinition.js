import { Link } from "react-router-dom";

export default function PresentTenseVerbDefinition() {
  return (
    <>
      <div className="page-title">
        <h2>Present Tense Verbs</h2>
      </div>
      <div className="page-body">
        <p className="grammar-explanation-paragraph">
          The present tense verbs are the most widely used verbs in the English
          language. Think about all the times you talk to friends and family
          about what's happening today. Have you ever thought about how much you
          do this? Personally, I've been thinking a lot about this recently. By
          the way I included all four tenses in this paragraph. Challenge
          yourself and try to identify them.
        </p>

        <div className="btn-container btn-flex">
          <Link
            to="/present-verb-tenses/simple-present"
            className=" btn btn-primary"
          >
            Simple Present
          </Link>
          <Link
            to="/present-verb-tenses/present-continuous"
            className="btn btn-primary"
          >
            Present Continuous
          </Link>
          <Link
            to="/present-verb-tenses/present-perfect"
            className="btn btn-primary"
          >
            Present Perfect
          </Link>
          <Link
            to="/present-verb-tenses/present-perfect-continuous"
            className="btn btn-primary"
          >
            Present Perfect Continuous
          </Link>
        </div>
      </div>
    </>
  );
}
