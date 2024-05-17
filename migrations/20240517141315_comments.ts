import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("comments", (table: Knex.TableBuilder) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.text("comment").notNullable();
    table.integer("article_id").notNullable();
    table.foreign("article_id").references("id").inTable("articles");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("comments");
}
