import { Router } from "express";
import bookController from "./controller.js";

const router = new Router();

router.post("/create", async (req, res) => {
  const createdBook = await bookController.create(req.body);
  res.json(createdBook);
});

router.post("/createMany", async (req, res) => {
  const { books } = req.body;

  const createdBooks = await bookController.createMany(books);
  res.json(createdBooks);
});

export default router;
