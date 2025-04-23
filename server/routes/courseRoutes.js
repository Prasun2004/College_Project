import express from "express";
import { getuserProfile, login, logout, register, updateProfile } from "../controller/userController.js";
import isAuthenticated from "../middlewares/Authinticate.js";
import upload from "../utils/multer.js";
import { createCourse, editCourse, getCreatorCourse } from "../controller/courseController.js";


const router =express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourse);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);


export default router;