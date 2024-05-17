import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    { title: "Article 1", body: "Body of Article 1", isApproved: true },
    { title: "Article 2", body: "Body of Article 2", isApproved: false },
    { title: "Article 3", body: "Body of Article 3", isApproved: true },
  ]);
}
