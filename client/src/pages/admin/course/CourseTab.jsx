import RichTextEditor from '@/components/RichTextEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CourseTab() {
   const isPublish =true;
   const isLoading=false;

   const [input,setInput]=useState({
      courseTitle:"",
      subTitle:"",
      description:"",
      category:"",
      courseLevel:"",
      coursePrice:"",
      courseThumbnail:""
   });

   const [image,setImage]=useState("");

   const navigate =useNavigate();

   const changeEventHandler=(e)=>{
     const {name,value} =e.target;
     setInput({...input ,[name]:value});
   };

   const selectCategory=(val)=>{
    setInput({...input, category:val});
   }

   const selectCourse=(val)=>{
    setInput({...input, courseLevel:val});
   }

   const selectFile=(e)=>{
     const file=e.target.files?.[0];
     if (file) {
        setInput({...input, courseThumbnail:file});
        const fileReader =new FileReader();
        fileReader.onloadend =()=>{
           setImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
     }
   }

  return (
    <Card>
    <CardHeader className='flex flex-row jutify-between'>
        <div>
            <CardTitle>Basic Course Information</CardTitle>
            <CardDescription>
                Make Change to your course here.Click save when gkuk hgugu ghugugku  iuguigguiuggiug 
            </CardDescription>
        </div>
        <div className='space-x-2'>
            <Button variant="outline">
               {
                isPublish ? "UnPublish" :"Publish"
               }
            </Button>
            <Button>
                Remove Course
            </Button>
        </div>
    </CardHeader>
    <CardContent>
        <div className='span-y-4'>
           <div>
             <Label>Course Title</Label>
             <Input
              type='text'
              name='CourseTitle'
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="ex. fullstack developer"
             />
           </div>
           <div>
             <Label>Sub Title</Label>
             <Input
              type='text'
              name='subTitle'
              value={input.subTitle}
              onChange={changeEventHandler}
              placeholder="ex. fullstack developer"
             />
           </div>
           <div>
             <RichTextEditor input={input} setInput={setInput}/>
           </div>
           <div className='flex items-center gap-5'>
            <div>
            <Label>Category</Label>
          <Select onValueChange={selectCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Next JS">Next JS</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Frontend Development">
                  Frontend Development
                </SelectItem>
                <SelectItem value="Fullstack Development">
                  Fullstack Development
                </SelectItem>
                <SelectItem value="MERN Stack Development">
                  MERN Stack Development
                </SelectItem>
                <SelectItem value="Javascript">Javascript</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="MongoDB">MongoDB</SelectItem>
                <SelectItem value="HTML">HTML</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
            </div>
            <div>
              <Label>Course Level</Label>
                        <Select  onValueChange={selectCourse}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Course Level</SelectLabel>
                              <SelectItem value="Beginner">Beginner</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Advance">Advance</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
            </div>
            <div>
              <Label>Price</Label>
              <Input
              type="number"
              name="coursePrice"
              value={input.coursePrice}
              onChange={changeEventHandler}
              placeholder="454"
              className="w-fit"
              />
            </div>
           </div>
           <div>
              <Label>Course Thumbail</Label>
              <Input
               type="file"
               accepts="image/*"
               className="w-fit"
               onChange={selectFile}
              />
              {
                image  && (
                  <img src={image} className='e-64 my-2'/>
                )
              }
            </div>
            <div>
              <Button variant="outline" onClick={()=>navigate("/admin/course")}>Cancel</Button>
              <Button disabled={isLoading}>
                {
                  isLoading ? (
                      <>
                       <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                      </>
                  ) :"Submit"
                }
              </Button>
            </div>
        </div>
    </CardContent>
    </Card>
  )
}
