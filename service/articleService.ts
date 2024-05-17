import { Request, Response } from "express";
import { ArticlesModel } from "../model/article";

const getArticles = async (_: Request, res: Response) => {
  try {
    const articles = await ArticlesModel.query().withGraphFetched("comments");
    res.status(200).json({ data: articles });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await ArticlesModel.query()
      .findById(id)
      .withGraphFetched("comments");
    if (article) {
      res.status(200).json({ data: article });
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addArticle = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const article = await ArticlesModel.query().insert(payload);
    res.status(201).json({ data: article });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const article = await ArticlesModel.query().findById(id).patch(payload);
    if (article) {
      res.status(200).json({ message: "Article updated successfully" });
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCount = await ArticlesModel.query().deleteById(id);
    if (deletedCount > 0) {
      res.status(204).json({ message: "Article deleted successfully" });
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
