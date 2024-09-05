import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://alura:123@aluracluster.hzit8.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");

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