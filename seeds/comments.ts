import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("comments").del();

  // Inserts seed entries
  await knex("comments").insert([
    { name: "John Doe", comment: "this is John Doe", article_id: 1 },
    { name: "John Smith", comment: "this is John Smith", article_id: 1 },
    { name: "Asep", comment: "this is Asep", article_id: 1 },
    { name: "Budi", comment: "this is Budi", article_id: 2 },
    { name: "Cahyo", comment: "this is Cahyo", article_id: 2 },
    { name: "Dedi", comment: "this is Dedi", article_id: 2 },
    { name: "Eko", comment: "this is Eko", article_id: 3 },
    { name: "Fajar", comment: "this is Fajar", article_id: 3 },
    { name: "Gatot", comment: "this is Gatot", article_id: 3 },
  ]);
}
