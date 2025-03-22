import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb"; // Use ES module import
const conString = "mongodb://localhost:27017";
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const options = {}; // Use ES module import

app.get("/getactivities", async (req, res) => {
    try {
        const client = new MongoClient(conString, options);
        await client.connect();
        
        const db = client.db("MDB");
        const users = await db.collection("Activities").find({}).toArray();
        
        res.send(users);
        client.close();
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.get("/getcontact", async (req, res) => {
    try {
        const client = new MongoClient(conString, options);
        await client.connect();

        const db = client.db("MDB");
        const usersCont = await db.collection("ContactAP").find({}).toArray();

        res.json(usersCont);
        client.close();
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
app.get("/getcompanies", async (req, res) => {
    try {
        const client = new MongoClient(conString, options);
        await client.connect();
        
        const db = client.db("MDB");
        const users = await db.collection("Companies").find({}).toArray();
        
        res.send(users);
        client.close();
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});
app.get("/getpipelines", async (req, res) => {
    try {
        const client = new MongoClient(conString, options);
        await client.connect();
        
        const db = client.db("MDB");
        const users = await db.collection("Pipeline").find({}).toArray();
        
        res.send(users);
        client.close();
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});


app.listen(6060, () => {
    console.log(`Server started: http://localhost:6060`);
});
