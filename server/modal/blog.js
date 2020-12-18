import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  Author: {
    type: String,
    required: [true, "Please add your name"],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  Title: {
    type: String,
    required: [true, "Please add The title"],
    unique: true,
    maxlength: [100, "Title  can not be more than 100 characters"],
  },
  Content: {
    type: String,
    required: [true, "Please add a description"],
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  imageUrl: { type: String },
  imageId: { type: String },

  commentCounts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("blog", blogSchema);
