import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const deploy: any = process.env.DATABASE_URL;

export const sequelize = new Sequelize(deploy, {
  dialect: "postgres",
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  username: process.env.PGUSER,
  models: [__dirname + "/models"],
});

