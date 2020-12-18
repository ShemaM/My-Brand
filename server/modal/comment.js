import mongoose from "mongoose";
const commentSchema = mongoose.Schema({
  name: { type: String, required: true, default: "Anoynmous" },
  message: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now },
});
export default mongoose.model("Comment", commentSchema);
