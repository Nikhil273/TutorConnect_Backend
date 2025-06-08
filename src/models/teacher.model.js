import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fulname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classes: {
    type: [String],
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
