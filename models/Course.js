const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: [
      {
        key: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
    sub: [
      {
        key: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
