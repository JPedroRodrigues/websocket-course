import { MongoClient } from "mongodb";

const client = new MongoClient("mongoclientUrl");

let collectionDocuments;

try {
    await client.connect();

    const db = client.db("alura-websockets");
    collectionDocuments = db.collection("documents");

    console.log("Connected to the DB with success");
} catch (error) {
    console.log(error);
}

export { collectionDocuments };
