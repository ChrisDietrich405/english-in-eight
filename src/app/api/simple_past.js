import { createConnection } from "mysql2/promise";

export async function getServerSideProps() {
    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "secret",
      database: "english_in_eight",
    });
    const [rows] = await connection.execute("SELECT * FROM simple_past");
    await connection.end();
    return { props: { data: rows } };
  }
  