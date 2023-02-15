import { MongoClient } from "mongodb";

const URI = `mongodb://localhost:27017`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("InventoryDB");
const bookCollection = db.collection("books");

const controller = {
  create(newBook) {
    return bookCollection.insertOne(newBook);
  },
  createMany(newBooks) {
    return bookCollection.insertMany(newBooks);
  },
  readAll() {
    return bookCollection.find().toArray();
  },
};

export default controller;
