import express from "express";
import { getuserProfile, login, logout, register, updateProfile } from "../controller/userController.js";
import isAuthenticated from "../middlewares/Authinticate.js";
import upload from "../utils/multer.js";
import { createCourse } from "../controller/courseController.js";


const router =express.Router();

router.route("/").post(isAuthenticated,createCourse);

export default router;