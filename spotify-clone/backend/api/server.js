import express from "express";
import { artistsArray } from "../../frontend/src/assets/database/artists.js";
import { songsArray } from "../../frontend/src/assets/database/songs.js";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Just '/artists' and '/songs' are available");
});

app.get("/artists", (request, response) => {
    response.send(artistsArray);
});

app.get("/songs", (request, response) => {
    response.send(songsArray);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
