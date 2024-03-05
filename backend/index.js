const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const {postAdmin} = require("./functions/allFunc")



app.post("/api/admin", async(req,res)=>{
    postAdmin(req,res)
})



app.listen(PORT, () => {
    console.log("Port Connected");
  });