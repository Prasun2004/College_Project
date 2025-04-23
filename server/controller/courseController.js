import { Course } from "../models/coursemodels.js";
import { deleteMedia, uploadMedia } from "../utils/cloudinary.js";

export const createCourse =async(req,res)=>{
    //console.log(req,res);
    try {
        const {courseTitle,category}=req.body;
        if(!courseTitle || !category){
            return res.status(400).json({
                message:"enter all details",
                success:false
            })
        }
        const course= await Course.create({
            courseTitle,
            category,
            creator:req.id
        });
        return res.status(201).json({
            course,
            message:"course creted",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to create course",
            success:false
        })
    }
}

export const getCreatorCourse= async (req,res)=>{
    try {
        const userId =req.id;
        const courses=await Course.find({creator :userId});
        if (!courses) {
            return res.status(404).json({
                courses:[],
                message :"course not found"
            })
        };
        return res.status(200).json({
            courses,
            message:"course successfully create"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to create course",
            success:false
        })
    }
}

export const editCourse =async(req,res)=>{
    try {

        const courseId=req.params.courseId;
        const {courseTitle, subTitle,description,category,courseLevel,coursePrice} =req.body; 
        const thumbnail=req.file;
        
        let course =await Course.findById(courseId);
        if (course) {
            return res.status(404).json({
                message:"course not found",
                success:false
            })
        };
        let courseThumbnail;

        if (thumbnail) {
            if (course.courseThumbnail) {
                const publicId=course.courseThumbnail.spilt("/").pop().spilt(".")[0];
                await deleteMedia(publicId);
            }

            courseThumbnail =await uploadMedia(thumbnail.path);
        }
        
        const updateData={courseTitle, subTitle,description,category,courseLevel,coursePrice,courseThumbnail:courseThumbnail?.secure_url};
        
        course=await Course.findByIdAndUpdate(courseId,updateData,{new:true});

        return res.status(200).json({
            course,
            message:"course update successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to create course",
            success:false
        })
    }
}