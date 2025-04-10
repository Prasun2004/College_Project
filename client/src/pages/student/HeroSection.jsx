import { Input } from '@/components/ui/input'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center'>
     <div className='max-w 3xl mx-auto'>
       <h1 className='text-white text-4xl font-bold mb-4'>Find the best course</h1>
       <p className='text-gray-200 dark:text-gray-400 mb-8'>ygjukl;ojiuygtguiophgjkopkiuygfgthujiokpkiuhgyfhjuiophgu</p>
       <form>
        <Input
         type="text"
         className="flex-grow bg-white border-none focus-visible-ring-0 px-6 py-3 text-black dark:text-gray-100 rounded-full shadow-lg overflow-hidden max-w xl mx-auto mb-6"
        />
       </form>
     </div>
    </div>
  )
}
