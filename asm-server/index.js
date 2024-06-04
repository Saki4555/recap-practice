const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OKAY");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.phgiqsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    const userCollection = client.db("recapDb").collection("users");

    const productCollection = client.db("recapDb").collection("products");

    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const updatedDoc = { $set: user };
      const options = { upsert: true };

      const result = await userCollection.updateOne(query, updatedDoc, options);
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    app.get("/get-products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const productToUpdate = req.body;

      const filer = { _id: new ObjectId(id) };

      const options = { upsert: true };
      const updatedDoc = { $set: productToUpdate };
      const result = await productCollection.updateOne(
        filer,
        updatedDoc,
        options
      );
      res.send(result)
    });


    app.delete('/delete-product/:id', async(req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id)};
      const result = await productCollection.deleteOne(query);
      res.send(result);
    })
    console.log("Database is successfully connected");
  } finally {
  }
}
run().catch(console.dir);

