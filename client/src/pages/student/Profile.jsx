import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import SingleCourse from './SingleCourse'
import { useLoadUserQuery } from '@/features/api/authApi'

export default function Profile() {
   
    const {data,isLoading}= useLoadUserQuery();
    console.log(data);
   // const [isLoading,setIsLoading]=useState(true);
    const enrollCourse=[1,2];

    if (isLoading) {
        return <h1>Profile loading....</h1>
    }
   const  {user} =data;
  return (
    <div className='max-w-4xl mx-auto px-4 my-24'>
      <h1 className='font-bold text-2xl text-center md:text-left'>Profile</h1>
      <div className='flex flex-col md:flex-row items-center md:items:start gap-8 my-5'>
        <div className='flex flex-col items-center'>
        <Avatar className="h-24 w-24 md:h-32 w-32 mb-4">
      <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </div>
        <div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                    Name:
                    <span className='font-normal text-gray-700 dark:text-gray-200 ml-2'>{user.name}</span>
                </h1>
            </div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                    email:
                    <span className='font-normal text-gray-700 dark:text-gray-200 ml-2'>{user.email}</span>
                </h1>
            </div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100 '>
                     Role:
                    <span className='font-normal text-gray-700 dark:text-gray-200 ml-2'>{user.role}</span>
                </h1>
            </div>
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" type="text" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
               Profile Picture
            </Label>
            <Input id="username" type="file" accept="image/*" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button >
          {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </div>
      </div>
      <div>
        <h1 className='font-medium text-lg'>Cousrse you are enrolled</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
           {
            user.enrolledCourses.length===0 ? <h1>you have no enroll course</h1> :(
                user.enrolledCourses.map((course,index)=><SingleCourse course={course} key={course._id}/>)
            )
           }
        </div>
      </div>
    </div>
  )
}
