import express from "express";
import urlRoute from "./routes/url.js";
import connectToDb from "./connection.js";
import path from "path";
import URL from "./models/url.js";
import staticRoute from "./routes/staticRouter.js";

const app = express();
const PORT = 8001;

connectToDb("mongodb://localhost:27017/short-url").then(() =>
	console.log("Database Connected Successfully!"),
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", staticRoute);

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
