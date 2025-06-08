import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  fullname: {
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
  grade: {
    type: String,
    required: true,
  },
  preferredSchedule: {
    type: String,
    required: true,
  },
  subjectsNeeded: {
    type: [String],
  },
  parentName: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});
const Student = mongoose.model("Student", studentSchema);
export default Student;

