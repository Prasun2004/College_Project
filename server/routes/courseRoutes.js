import express from "express";
import isAuthenticated from "../middlewares/Authinticate.js";
import upload from "../utils/multer.js";
import { createCourse, editCourse, getCourseById, getCreatorCourse } from "../controller/courseController.js";


const router =express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourse);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);


export default router;