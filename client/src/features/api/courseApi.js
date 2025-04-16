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
    }),
});

export const {
    useCreateCourseMutation,
    useGetCreatorCourseQuery
} =courseApi