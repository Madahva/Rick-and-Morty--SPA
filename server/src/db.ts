import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const deploy: any = process.env.DATABASE_URL;

export const sequelize = new Sequelize(deploy, {
  dialect: "postgres",
  models: [__dirname + "/models"],
});

