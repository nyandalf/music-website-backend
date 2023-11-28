import express from "express";
import mongoose from "mongoose";
import { QuestionModel } from "../models/Questions.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await QuestionModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/:userId", async (req, res) => {
  const { quizId, timeTaken, correctAnswers } = req.body;
  const userId = req.params.userId;
  console.log(userId);
  try {
    const finishedQuiz = {
      // quizId: mongoose.Types.ObjectId(quizId), // Assuming quizId is a string representing ObjectId
      quizId,
      timeTaken,
      correctAnswers,
    };
    console.log(finishedQuiz);
    // Find the user by userId and update the finishedQuizzes array
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { finishedQuizzes: finishedQuiz } },
      { new: true }
    );
    console.log(updatedUser);
    res
      .status(200)
      .json({ message: "Finished quiz added successfully", user: updatedUser });
  } catch (err) {
    res.json(err);
  }
});

export { router as questionRouter };
