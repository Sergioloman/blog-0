const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "username is required!!!!!!!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required!!!!!"],
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
