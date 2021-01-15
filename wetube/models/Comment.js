import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  }, // 옵션이 있을 때는 두줄로
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Commnet", CommentSchema);
export default model;
