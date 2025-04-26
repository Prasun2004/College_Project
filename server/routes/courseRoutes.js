import express from "express";
import isAuthenticated from "../middlewares/Authinticate.js";
import upload from "../utils/multer.js";
import { createCourse, createLecture, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourse, getLectureById, removeLecture } from "../controller/courseController.js";


const router =express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourse);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated,createLecture);
router.route("/:courseId/lecture").get(isAuthenticated,getCourseLecture);
router.route("/lecture/:lectureId").get(isAuthenticated,getLectureById);
router.route("/lecture/:lectureId").delete(isAuthenticated,removeLecture);
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated,editLecture);


export default router;