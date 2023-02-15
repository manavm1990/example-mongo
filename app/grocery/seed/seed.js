import { MongoClient } from "mongodb";
import data from "./data.js";

const URI = `mongodb://localhost:27017`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("GroceryListDB");
const bookCollection = db.collection("groceryList");

// Await the results of the deletion! (asynchronous)
await bookCollection.deleteMany({});
bookCollection.insertMany(data).then(() => {
  console.info("Data seeded successfully!");
});
