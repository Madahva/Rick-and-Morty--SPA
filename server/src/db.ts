import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  models: [__dirname + "/models"],
});

