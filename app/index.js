import express from "express";
import controller from "./pet/controller.js";
import bookRouter from "./book/routes.js";

const PORT = 3000;

const app = express();

// Middleware - Allows us to parse JSON
app.use(express.json());

// Middleware - Sends any requests to /book to the bookRouter
app.use("/book", bookRouter);

app.post("/pet/create", (req, res) => {
  controller.create(req.body).then((result) => {
    res.json(result);
  });
});

app.get("/pet/readAll", (_, res) => {
  controller.readAll().then((result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}/`);
});
