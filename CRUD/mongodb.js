const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "student";

const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    await client.connect();
    const db = client.db(database);
    return db.collection("profile");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
