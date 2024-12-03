import mongoose from "mongoose";

// Schema
const userSchema = new monogoose.Schema(
  {
    "image": { "type": String },
    "firstName": { "type": String, "required": true },
    "lastName": { "type": String, "required": true},
    "title": { "type": String, "required": true },
    "language": { "type": Array }
  }
);

export { userSchema };