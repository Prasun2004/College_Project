import mongoose from "mongoose";

const courseSchema =new mongoose.Schema({
    courseTitle :{
        type:String,
        required:true
    },
    subTitle :{
        type:String,
       // required:true
    },
    description :{
        type:String,
       // required:true
    },
    category :{
        type:String,
        required:true
    },
    courseLevel :{
        type:String,
        enum:["beginner","medium","advance"]
    },
    coursePrice :{
        type:String,
        required:true
    },
    courseThumbile :{
        type:String,
        //required:true
    },
    enrolledStudents :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    lectures:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lecture'
    }],
    creator:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
    },
    isPublish:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const Course =mongoose.model("Course",courseSchema);