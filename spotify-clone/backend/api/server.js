import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Just '/artists' and '/songs' are available");
});

app.get("/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
