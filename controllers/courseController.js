const Course = require("../models/Course");
const courseController = require("express").Router();

// get all courses
courseController.get("/getall", async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json(courses);
  } catch (error) {
    console.error(error);
  }
});

// create course
courseController.post("/create", async (req, res) => {
  try {
    const { title, sub } = req.body;

    // Process the title and sub arrays to match the new schema structure
    const processedTitle = title.map((item) => ({
      key: Object.keys(item)[0],
      value: Object.values(item)[0],
    }));

    const processedSub = sub.map((item) => ({
      key: Object.keys(item)[0],
      value: Object.values(item)[0],
    }));

    const newCourse = await Course.create({
      title: processedTitle,
      sub: processedSub,
    });

    return res.status(201).json(newCourse);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = courseController;
