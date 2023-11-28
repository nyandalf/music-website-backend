import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { questionRouter } from "./routes/questions.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/questions", questionRouter);

mongoose.connect(
  "mongodb+srv://leon:1234@recipes.oqardh6.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("Server started."));
