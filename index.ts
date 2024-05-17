import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import Router from "./routes/index";

const app: Express = express();
const port = 3000;

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "ditobayu25",
    port: 5432,
    host: "localhost",
    database: "CH_5_ORM",
  },
});

Model.knex(knexInstance);

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(Router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
