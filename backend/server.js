import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
connectDB();  

const app = express();

app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)

})

