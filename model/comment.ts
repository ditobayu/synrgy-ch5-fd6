import { Model, ModelObject } from "objection";
import { ArticlesModel } from "./article";

export class CommentModel extends Model {
  id!: number;
  name!: string;
  comment!: string;
  article_id!: number;

  static get tableName() {
    return "comments";
  }

  static get relationMappings() {
    return {
      article: {
        relation: Model.BelongsToOneRelation,
        modelClass: ArticlesModel,
        join: {
          from: "articles.id",
          to: "comments.article_id",
        },
      },
    };
  }
}

export type Comments = ModelObject<CommentModel>;
