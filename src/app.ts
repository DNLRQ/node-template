import express, { Express } from "express";
import loaders from "./loaders";
import dotenv from "dotenv";
import config from "./config";
import { logger } from "./loaders/logger";

dotenv.config();
let app: Express = express();

export async function startServer(app: Express) {

  await loaders.init({ expressApp: app });

  app.listen(3000, () => {
    console.log("Servidor Corriendo en http://localhost:", config.port);
  });

}
if (process.env.NODE_ENV !== "test")
  startServer(app);

export default app;