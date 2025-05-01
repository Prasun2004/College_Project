import React from 'react'
import { Button } from './ui/button'
import { useCreateCheechoutSessionMutation } from '@/features/api/purchaseApi'

export default function BuyCourseButton({courseId}) {
  const [ createCheechoutSession,{data,isLoading,}] =useCreateCheechoutSessionMutation();

  const purchaseCourseHandler = async ()=>{
    await createCheechoutSession(courseId)
  }
  return (
        <Button className='w-full' onClick={purchaseCourseHandler}>
            Purchase Button
        </Button>
  )
}
