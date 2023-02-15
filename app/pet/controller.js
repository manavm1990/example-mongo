import { MongoClient } from "mongodb";

const URI = `mongodb://localhost:27017`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("ShelterDB");
const petCollection = db.collection("pets");

petCollection.insertOne({
  name: "Fido",
  type: "Pug",
});
