import express from "express";
import urlRoute from "./routes/url.js";
import connectToDb from "./connection.js"

const app = express();
const PORT = 8001;

connectToDb("mongodb://localhost:27017/short-url").then(() => console.log("Database Connected Successfully!"));

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
