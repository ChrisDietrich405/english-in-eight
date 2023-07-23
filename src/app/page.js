import Image from 'next/image'
import Link from "next/link"
import styles from './page.module.css'



export default function Home() {
  return (
    <main className={styles.home} styles={{marginTop: "300px"}}>

      <div className="container">
      
        <h1>
          Welcome to{" "}
          <span className="title-span">English in Eight Minutes</span>
        </h1>
        <p className="title-content">
          {" "}
          This website offers English lessons you can complete in less than 8
          minutes. Pick a topic, study a few minutes, and then do the
          corresponding exercise. The focus is on English phrasal verbs,
          grammar, and idiomatic expressions specific to{" "}
          <b> the United States. </b>
        </p>
      </div>

      <div className="container card-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link href="/noun-categories/noun-definition">
              <div className="noun-examples">
                <i className="fas fa-tree" aria-hidden="true"></i>
                <p className="content-title-second-row">Nouns</p>
                <p className="content-definition">people, places and things</p>
                <p>woman, tree, car</p>
              </div>
            </Link>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/verbs-definition/verbs-def">
              <div className="verb-examples">
                <i className="fas fa-running" aria-hidden="true"></i>
                <p className="content-title-second-row">Verbs</p>
                <p className="content-definition">action words</p>
                <p>run, fight, sing</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/adjective-categories/adjective-definition">
              <div className="adjective-examples">
                <i className="fas fa-angry" aria-hidden="true"></i>
                <p className="content-title-second-row">Adjectives</p>
                <p className="content-definition">describe nouns</p>
                <p>smart, strong, funny</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/expressions-categories/expressions-definition">
              <div className="noun-examples">
                <i className="fas fa-comments fa-1.5x" aria-hidden="true"></i>
                <p className="content-title-second-row">
                  Idiomatic Expressions
                </p>
                <p className="content-definition">Informal Expressions</p>
                <p>Foolproof, Second wind</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/phrasal-verbs-categories/phrasal-verbs-definition">
              <div className="verb-examples">
                <i
                  className="fas fa-comments comments fa-1.5x"
                  aria-hidden="true"
                ></i>
                <p className="content-title-second-row">Phrasal Verbs</p>
                <p className="content-definition">
                  Verb/Preposition combinations
                </p>
                <p>Get up, Break down, Speak out</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/versus-categories/versus-definition">
              <div className="adjective-examples">
                <i
                  className="fas fa-comments comments fa-1.5x"
                  aria-hidden="true"
                ></i>
                <p className="content-title-second-row">Versus</p>
                <p className="content-definition">Speak versus Talk</p>
                <p>Remember versus Remind</p>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </main>
  )
}
