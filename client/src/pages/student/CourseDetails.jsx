import BuyCourseButton from '@/components/BuyCourseButton';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator';
import { BadgeInfo, PlayCircle } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom';

export default function CourseDetails() {
    const params =useParams();
    const courseId =params.courseId;
    const purchaseCourse =true;
  return (
    <div className='mt-20 space-y-5'>
       <div className='bg-[#2D2F31] text-white'>
          <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2'> 
             <h1 className='font-bold text-2xl md:text-3xl'>Course title</h1>
             <p className='text-base md:text-lg '>Course Subtitle</p>
             <p>Creted by<span className='text-[#c0c4fc] underline italic'>prasun</span></p>
             <div className='flex item-center gap-2 text-sm'>
                <BadgeInfo size={16}/>
                <p>Last Updated 5-7-12</p>
             </div>
             <p>Students Enrolled :45</p>
          </div>
       </div>
        <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10'>
          <div className='w-full lg:w-1/2 space-y-5'>
            <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Odio maiores molestiae distinctio, omnis laudantium recusandae dolore. 
                Repellendus voluptatibus quas officia fugit magni animi delectus velit ab, ducimus perferendis assumenda debitis?
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Course Toyuu</CardTitle>
                    <CardDescription>892 lectures</CardDescription>
                </CardHeader>
                <CardContent className='space-y-3'>
                   {
                    [1,2].map((lecture,index)=>(
                        <div key={index} className='flex item-center gap-3 text-sm'>
                           <span>
                            {
                                true ?( <PlayCircle/>) :(<Lock size={14}/> )
                            }
                           </span>
                           <p>lecture title</p>
                        </div>
                    ))
                   }
                </CardContent>
            </Card>
          </div>
        <div className='w-full lg:w-1/3'>
           <Card>
            <CardContent className='p-4 flex flex-col'>
                <div className='w-full aspect-video mb-4'>
                   fghjkljhbklm
                </div>
                <h1>lecture titile</h1>
                <Separator className="my-2"/>
                 <h1 className='text-lg md:text-xl font-semibold'>Course price</h1>
            </CardContent>
            <CardFooter className='flex justify-center p-4'>
                {
                    purchaseCourse ? (
                        <Button className='w-full'>
                        Continue Course
                    </Button>
                    ) : (
                        <Button className='w-full'>
                        <BuyCourseButton courseId={courseId}/>
                    </Button>
                    )
                }
            </CardFooter>
           </Card>
        </div>
       </div>
    </div>
  )
}
