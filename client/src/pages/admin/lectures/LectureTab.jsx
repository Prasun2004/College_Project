import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'

export default function LectureTab() {

    const [title,setTitle]=useState('');
    const [uploadInfo,setUploadInfo]=useState(null);
    const [isFree,setIsFree]=useState(false);
    const [mediaProgress,setMediaprogress]=useState(false);
    const [uploadProgress,setUploadProgress]=useState(0);
    const [btnDisable,setBtnDisable]=useState(true);

    const MEDIA_API="http://localhost:8080/media";

    const fileChangeHandler=async(e)=>{
        const file =e.target.files[0];
        if (file) {
            const formData=new FormData();
            formData.append("file",file);
            setMediaprogress(true);
            try {
                const res =await axios.post(`${MEDIA_API}/upload-video`,formData,{
                    onUploadProgress:({loaded,total})=>{
                        setUploadProgress(Math.round((loaded*100)/total));
                    }
                });
                if (res.data.success) {
                    console.log(res);
                    setUploadInfo({videoUrl:res.data.data.url,publicId:res.data.data.public_id});
                    setBtnDisable(false);
                    toast.success("video upload sucessful");
                }
            } catch (error) {
                console.log(error);
                toast.error("video upload fail");
            }finally{
                setMediaprogress(false);
            }
        }
    }

  return (
     <Card>
        <CardHeader>
            <div className='flex justify-between'>
                <CardTitle>Edit Lecture</CardTitle>
                <CardDescription>Make changes and click save</CardDescription>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant='destructive'>Remove Lecture</Button>
            </div>
        </CardHeader>
        <CardContent>
            <div>
                <Label>Title</Label>
                 <Input
                 type='text'
                  placeholder="ex. Introduction"
                 />
            </div>
            <div className='my-5'>
            <Label>Video<span className='text-red-500'>*</span></Label>
                 <Input
                 type='file'
                 accept='video/*'
                  className='w-fit'
                  onChange={fileChangeHandler}
                 />
            </div>
            <div className='flex items-center space-x-2 my-5'>
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Is this Video Free</Label>
            </div>
            {
                mediaProgress && (
                    <div className='my-4'>
                        <Progress value={uploadProgress}/>
                      <p>{uploadProgress}% Uploaded</p>
                    </div>
                )
            }
            <div className='mt-4'>
               <Button>
                 Update Lecutre
               </Button>
            </div>
        </CardContent>
     </Card>
  )
}
