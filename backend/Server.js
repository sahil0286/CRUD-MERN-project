const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config()


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("MongoDB Connected")})
.catch((error)=>{console.log(error)})



app.listen(PORT,()=>{console.log(`Server is running on PORT: ${PORT}`);});