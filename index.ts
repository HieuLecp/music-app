import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import clientRoutes from "./routes/client/index.route";

dotenv.config();
database.connect();

const app: Express= express();
const port: number | string= process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})