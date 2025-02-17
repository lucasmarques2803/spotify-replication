import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
    response.send("Just '/artists' and '/songs' are available");
});

app.get("/api/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async (request, response) => {
    response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
