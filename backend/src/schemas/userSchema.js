import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema({
  "image": { "type": String },
  "firstName": { "type": String, "required": true },
  "lastName": { "type": String, "required": true},
  "title": { "type": String, "required": true },
  "bio": { "type": String },
  "course": { "type": String || Array },
  "expertise": { "type": String || Array },
  "qualification": { "type": String || Array }
});

export { userSchema };