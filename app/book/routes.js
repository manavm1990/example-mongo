import { Router } from "express";
import bookController from "./controller.js";

const router = new Router();

router.post("/create", async (req, res) => {
  const createdBook = await bookController.create(req.body);
  res.json(createdBook);
});

export default router;
