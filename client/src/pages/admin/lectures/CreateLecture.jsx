import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label";
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateLecture() {
    const params=useParams();
    const courseId=params.courseId;
    const navigate =useNavigate();

    const [lectureTitle,setLectureTitle]=useState("");
     const isLoading =false;

     const createLectureHandler= async()=>{
        
     }
  return (
    <div className="flex-1 mx-10 ">
      <div className="mb-4">
        <h1 className="font-bold text-xl">Let's add Lecture </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          necessitatibus quisquam nesciunt aut vel eveniet. Doloremque minima
          eius pariatur libero error rem laborum aperiam velit nisi quibusdam
          corporis, expedita recusandae.
        </p>
      </div>
      <div className="space-y-4">
        <div className="">
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            value={lectureTitle}
            placeholder="your course name"
            onChange={(e)=>setLectureTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={()=>(navigate(`/admin/course/${courseId}`))}>Back to Course</Button>
          <Button disabled={isLoading} onClick={createLectureHandler}>
            {
              isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
              ) :"Create Lecture"
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
