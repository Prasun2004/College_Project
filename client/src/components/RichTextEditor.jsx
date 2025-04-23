import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Label } from './ui/label';
import { Input } from './ui/input';


const RichTextEditor=({input,setInput})=> {
  
 
  
  const handleChnage=(content)=>{
      setInput({...input, description:content})
  }

  return(
   <>
    <Label>Description</Label>
             <Input
              type='text'
              value={input?.description}
              name='description'
              onChange={handleChnage}
              placeholder="ex. fullstack developer"
      />
   </>
  );
}

export default RichTextEditor ;