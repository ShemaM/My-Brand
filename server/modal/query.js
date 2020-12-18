import mongoose from "mongoose";

const querySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.model("Query", querySchema);
