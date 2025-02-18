// JavaScript Assíncrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://vpistoriguimaraes:3h7O3FShRmf6xznI@cluster0.u8bzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");