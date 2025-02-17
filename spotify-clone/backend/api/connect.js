import { MongoClient } from "mongodb";

const URI =
    "mongodb+srv://lucas:LpwJWLlVzWk8PO8V@cluster0.shhp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-clone");
