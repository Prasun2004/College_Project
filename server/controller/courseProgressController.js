import { Course } from "../models/coursemodels.js";
import { CourseProgress } from "../models/courseProgressmodels.js";

export const getCourseProgress =async(req,res)=>{
    try {
        const {courseId} =req.params;
        const {userId} =req.id;
        
        let courseProgress =await CourseProgress.findOne({courseId,userId}).populate("courseId");

        const courseDetails =await Course.findById(courseId);

        if (!courseDetails) {
            return res.status(404).json({
                message:"course not found"
            })
        }

        
    } catch (error) {
       console.log(error);
       return res.status(500).json({
         message:"course progress not found"
       }) 
    }
}