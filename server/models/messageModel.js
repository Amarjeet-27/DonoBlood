import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    role: {
      type: String,
      required: true,
    },
    organisationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("message", messageSchema);
export default messageModel;
