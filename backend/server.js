import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import aboutRoutes from "./routes/aboutRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
connectDB();  

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)

})

