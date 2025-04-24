import { Course } from "../models/coursemodels.js";
import { Lecture } from "../models/lecturemodels.js";
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
        const course=await Course.find({creator :userId});
        if (!course) {
            return res.status(404).json({
                courses:[],
                message :"course not found"
            })
        };
        return res.status(200).json({
            course,
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
        
        if (!course) {
            return res.status(404).json({
                message:"course not found",
                
            })
        };
        let courseThumbnail;

        if (thumbnail) {
            if (course?.courseThumbnail) {
                const publicId=course.courseThumbnail.split("/").pop().split(".")[0];
                await deleteMedia(publicId);
            }

            courseThumbnail =await uploadMedia(thumbnail.path);
        }
        
        const updateData={courseTitle, subTitle,description,category,courseLevel,coursePrice,courseThumbnail:courseThumbnail?.secure_url};
        
        course=await Course.findByIdAndUpdate(courseId,updateData,{new:true});
      //  console.log(course);

        return res.status(200).json({
            course,
            message:"course update successfully",
           
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to create course",
            success:false
        })
    }
}

export const getCourseById =async(req,res)=>{
   
    try {
        
        
        const course= await Course.findById(req.params.courseId);
        // console.log(course);

        if (!course) {
            return res.status(404).json({
                message:"course not found",
                success:false
            }) 
        };

        return res.status(200).json({
            course,
            message:"course  found",
            
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to get course",
            success:false
        }) 
    }
}

export const createLecture =async(req,res)=>{
    try {
        const{lectureTitle} =req.body;
        const {courseId} =req.params;

        console.log(req.body, req.params);

        if(!lectureTitle || !courseId){
            return res.status(400).json({
                message:"lecture id and lecturetitle not found"
            });
        };
       
        const lecture= await Lecture.create({lectureTitle});

        const course =await Course.findById(courseId);

        if (course) {
            course.lectures.push(lecture._id);
            await course.save();
        }
        console.log(course);
        return res.status(201).json({
            course,
            message:"lecture create successful",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"fail to create lecture",
            success:false
        }) 
    }
}