export default function NounDefinition() {
  return (
    <>
      <main>
        <h2 style={{marginTop: "300px"}}>hello</h2>
        <div className="page-title">
          <h2>Noun Definition</h2>
        </div>
        <div className="page-body">
          <p
            style={{ textAlign: "center" }}
            className="grammar-explanation-paragraph"
          >
            A noun is a word that describes an object or set of objects, such as
            people, places or things{" "}
          </p>
        </div>
        <div className="definition-pictures-container">
          <div className="definition-pictures">
            <div className="picture-wrapper">
              <img
                src="../../../images/person-nouns-definition.jpg"
                alt="Picture of actor Terry Crews"
              />
            </div>
            <p className="picture-subtitle">Person</p>
            <p aria-hidden="true" className="picture-subtitle">
              (Terry Crews)
            </p>
          </div>
          <div className="definition-pictures">
            <div className="picture-wrapper">
              <img
                src="../../../images/place-nouns-definition.jpg"
                alt="Picture of the Taj Mahal"
              />
            </div>
            <p className="picture-subtitle">Place</p>
            <p aria-hidden="true" className="picture-subtitle">
              (Taj Mahal)
            </p>
          </div>
          <div className="definition-pictures">
            <div className="picture-wrapper">
              <img
                src="../../../images/thing-nouns-definition.jpg"
                alt="Picture of IPhone"
              />
            </div>
            <p className="picture-subtitle">Thing</p>
            <p aria-hidden="true" className="picture-subtitle">
              (IPhone)
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
