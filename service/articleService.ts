import { Request, Response } from "express";
import { ArticlesModel } from "../model/article";

const getArticles = async (_: Request, res: Response) => {
  const articles = await ArticlesModel.query().select();
  res.status(200).json({ data: articles });
};

const getArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const article = await ArticlesModel.query().findById(id);
  res.status(200).json({ data: article });
};

const addArticle = async (req: Request, res: Response) => {
  const payload = req.body;
  const article = await ArticlesModel.query().insert(payload);
  res.status(201).json({ data: article });
};

const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const article = await ArticlesModel.query().findById(id).patch(payload);
  res.status(200).json({ data: article });
};

const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ArticlesModel.query().deleteById(id);
  res.status(204).json();
};

export {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
