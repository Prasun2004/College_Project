import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_URL="http://localhost:8080/course";

export const courseApi = createApi({
    reducerPath:"courseApi",
    tagTypes:['Refetch_Creator_Course'],
    baseQuery:fetchBaseQuery({
        baseUrl: COURSE_URL,
        credentials:"include"
    }),

    endpoints:(builder)=>({
        createCourse:builder.mutation({
            query:({courseTitle,category})=>({
                url:"/",
                method:"POST",
                body:{category,courseTitle}
            }),
            invalidatesTags:['Refetch_Creator_Course'],
        }),
        getCreatorCourse:builder.query({
            query:()=>({
                url:"/",
                method:"GET",
            }),
            providesTags:['Refetch_Creator_Course'],
        }),
        editCourse :builder.mutation({
            query:(formData,coursId)=>({
               url: `/${coursId}`,
               method:"PUT",
               body:formData
            }),
        }),
        getCourseById:builder.query({
            query:(courseId)=>({
                url:`/${courseId}`,
                method:"GET"    
            })
        })
    }),
});

export const {
    useCreateCourseMutation,
    useGetCreatorCourseQuery,
    useEditCourseMutation,
    useGetCourseByIdQuery
} =courseApi