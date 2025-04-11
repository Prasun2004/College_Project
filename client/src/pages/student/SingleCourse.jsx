import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function SingleCourse() {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className='relative'>
          <img
           src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg'
           className='w-full h-36 object-cover rounded-t-lg'
          />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className='hover:uderline font-bold text-lg truncate'>Next js complete couse</h1>
        <div className='flex item-center justify-between'>
        <div className='flex items-center gap-3'>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <h1 className='font-medium text-sm'>pateljhkb</h1>
        </div>
        <Badge className="bg-blue-600 text-white px-2 py-1 text-x5 rounded-full">
            Advance
        </Badge>
        </div>
        <div className='text-lg font-bold'>
            <span>499</span>
        </div>
      </CardContent>
    </Card>
  )
}
