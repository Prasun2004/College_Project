import express from 'express';
import isAuthenticated from '../middlewares/Authinticate.js';
import { getCourseProgress, markAsCompleted, markAsIncompleted, updateLectureProgress } from '../controller/courseProgressController.js';

const router =express.Router();

router.route("/:courseId").get(isAuthenticated,getCourseProgress);
router.route("/:courseId/lecture/:lectureId/view").post(isAuthenticated,updateLectureProgress);
router.route("/:courseId/complete").post(isAuthenticated,markAsCompleted);
router.route("/:courseId/incomplete").post(isAuthenticated,markAsIncompleted);

export default router;