import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static("src"));

app.route("/").get((req, res) => {
	const filePath = path.join(__dirname, "./src/index.html");
	res.sendFile(filePath);
});

app.route("/books").get((req, res) => {
	const filePath = path.join(__dirname, "./src/books.html");
	res.sendFile(filePath);
});

app.route("/information").get((req, res) => {
	const filePath = path.join(__dirname, "./src/information.html");
	res.sendFile(filePath);
});

app.listen(3000, () => {
	console.log("Listening to Port 3000");
});
