require("dotenv").config()

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("../frontend/public"));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGOPASSWORD

console.log('the uri is: ', uri)

const client = new MongoClient(uri);

app.get("/search", (req, res) => {
  async function showAllBeers() {
    try {
      await client.connect();
      console.log("connection to mongodb was established");
      const collection = client.db("ABC").collection("Beers");
      // perform actions on the collection object
      const beers = await collection.find().toArray();
      res.send(beers);
      await client.close();
    } catch (e) {
      console.log(e.message);
      res.sendStatus(400);
    }
  }
  showAllBeers();
});

app.get("/search/:filter/:query", (req, res) => {
  async function searchBeers() {
    const query = req.params.query;
    const filter = req.params.filter;
    try {
      await client.connect();
      const collection = client.db("ABC").collection("Beers");
      const cursorArr = await collection.find({ [filter]: query }).toArray()
      res.send(cursorArr);
      await client.close();
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
  searchBeers();
});

app.get("/", (req, res) => {
  res.send("This is a test");
});

app.listen(port);
