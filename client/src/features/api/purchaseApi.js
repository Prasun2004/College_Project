import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PURCHASE_API="http://localhost/purchase";

export const purchaseApi =createApi({
    reducerPath:"purchaseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:PURCHASE_API,
        credentials:'include'
    }),
    endpoints:(builder)=>({
        createCheechoutSession:builder.mutation({
            query:(courseId)=>({
                url:"/cheeckout/create-cheeckout-session",
                method:"POST",
                body:courseId
            })
        }),

    })
})

export const {useCreateCheechoutSessionMutation} =purchaseApi