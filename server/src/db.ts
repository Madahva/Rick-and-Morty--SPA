import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const deploy: any = "postgresql://postgres:adE7eAF3s03WpAjrj8QA@containers-us-west-145.railway.app:7871/railway"

export const sequelize = new Sequelize(deploy, {
  dialect: "postgres",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  models: [__dirname + "/models"],
});

