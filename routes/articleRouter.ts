import express, { Request, Response, NextFunction } from "express";
import {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
} from "../service/articleService";

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);
router.post("/", addArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
