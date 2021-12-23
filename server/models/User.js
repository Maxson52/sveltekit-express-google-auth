import mongoose from "mongoose";
const Schema = mongoose.Schema;

import findOrCreate from "mongoose-find-or-create";

// Create a schema for the user
let userSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

userSchema.plugin(findOrCreate);

export default mongoose.model("User", userSchema);
