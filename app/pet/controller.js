import { MongoClient } from "mongodb";

const URI = `mongodb://localhost:27017`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("ShelterDB");
const petCollection = db.collection("pets");

const controller = {
  create(newPet) {
    return petCollection.insertOne(newPet);
  },
  readAll() {
    return petCollection.find().toArray();
  },
};

export default controller;
