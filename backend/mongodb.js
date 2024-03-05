// import { MongoClient } from "mongodb";
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://umairyahya1999:umair99@cluster0.wpfe6g6.mongodb.net/";
const client = new MongoClient(url);
const database = "Portfolio";

async function dbAdmin() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("Admin");
}
// async function dbVehicle() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("vehicleData");
// }
module.exports = {dbAdmin};
