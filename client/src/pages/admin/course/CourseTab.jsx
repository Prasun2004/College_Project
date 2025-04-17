import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function CourseTab() {
   const isPublish =true;
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
             <Label>Title</Label>
             <Input
              type='text'
              placeholder="ex. fullstack developer"
             />
           </div>
        </div>
    </CardContent>
    </Card>
  )
}
