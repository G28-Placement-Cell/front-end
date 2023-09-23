import { apislice } from "./apislice";

const student_url = 'api/student'

export const studentApislice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${student_url}/login`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${student_url}/logout`,
                method: 'POST',
                message: "logged out"
            })
        }),
    })
})

export const { useLoginMutation,useLogoutMutation } = studentApislice;