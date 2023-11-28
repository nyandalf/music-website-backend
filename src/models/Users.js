import mongoose from "mongoose";

const finishedQuizSchema = new mongoose.Schema({
  // quizId: { type: mongoose.Schema.Types.ObjectId, ref: "questions" },
  quizId: { type: String },
  timeTaken: { type: Number },
  correctAnswers: { type: Number },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  finishedQuizzes: [finishedQuizSchema],
});

export const UserModel = mongoose.model("users", UserSchema);
