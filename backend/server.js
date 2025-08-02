import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import aboutRoutes from "./routes/aboutRoutes.js";

dotenv.config();
connectDB();  

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/about", aboutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)

})

