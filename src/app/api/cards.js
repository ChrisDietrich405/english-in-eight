import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("english_in_eight");
  switch (req.method) {
    case "GET":
      const cards = await db.collection("cards").find({});
      res.json(cards);
      break;
  }
}
