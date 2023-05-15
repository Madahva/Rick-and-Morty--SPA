import { sequelize } from "./src/db";
import app from "./src/app";

const port = process.env.PGPORT || 3001;

sequelize
  .authenticate()
  .then(() => {
    console.log("base de datos conectada! :D");
    return sequelize.sync({ force: true, logging: false });
  })
  .then(() => {
    app.listen(port, function () {
      console.log(`💪 listening at ${port} 💪`);
    });
  })
  .catch((err) => console.error(err));

