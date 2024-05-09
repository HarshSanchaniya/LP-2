const express = require("express");
const dbConnect = require("./mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
dbConnect()
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

// GET API
app.get("/getData", async (req, res) => {
  try {
    const result = await dbConnect();
    const data = await result.find().toArray();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST API
app.post("/insertData", async (req, res) => {
  try {
    const result = await dbConnect();
    await result.insertOne(req.body);
    res.send("Data inserted successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// PUT API
app.put("/updateData/:name", async (req, res) => {
  try {
    const result = await dbConnect();
    await result.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("Data updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// DELETE API
app.delete("/deleteData/:name", async (req, res) => {
  try {
    const result = await dbConnect();
    await result.deleteOne({ name: req.params.name });
    res.send("Data deleted successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
