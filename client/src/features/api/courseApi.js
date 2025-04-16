import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_URL="http://localhost:8080/course";

export const courseApi = createApi({
    reducerPath:"courseApi",
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
        }),
    }),
});

export const {
    useCreateCourseMutation
} =courseApi