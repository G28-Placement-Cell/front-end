import { apislice } from "./apislice";

const company_url = 'api/company'

export const companyApislice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${company_url}/login`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${company_url}/logout`,
                method: 'POST',
                message: "logged out"
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${company_url}/register`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = companyApislice;