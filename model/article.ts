import { Model, ModelObject } from "objection";
import { CommentModel } from "./comment";

export class ArticlesModel extends Model {
  id!: number;
  title!: string;
  body!: string;
  approved!: boolean;

  static get tableName() {
    return "articles";
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentModel,
        join: {
          from: "comments.article_id",
          to: "articles.id",
        },
      },
    };
  }
}

export type Articles = ModelObject<ArticlesModel>;
