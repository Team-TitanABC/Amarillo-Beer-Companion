const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://teamtitan:fOSt21g0gCbxhYCM@abc.qtywt.mongodb.net/ABC?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function showAllBeers() {
    try {
        
    } catch (e) {
        console.log(e.message)
    }
}

client.connect(err => {
  const collection = client.db("ABC").collection("Beers");
  // perform actions on the collection object
  client.close()
})
