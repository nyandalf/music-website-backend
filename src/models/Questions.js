import mongoose from "mongoose";

// const QuestionSchema = new mongoose.Schema({
//   id: { type: Number },
//   questionPool: mongoose.Schema.Types.Mixed, // Allow both array of items and array of objects
//   questionCount: { type: Number },
//   options: [{ type: String }],
//   description: { type: String },
//   type: { type: String },
//   clef: { type: String },
// });

const QuestionSchema = new mongoose.Schema({
  questions: { type: Object },
});

export const QuestionModel = mongoose.model("questions", QuestionSchema);
