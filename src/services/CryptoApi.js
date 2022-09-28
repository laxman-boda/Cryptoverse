import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f3b3e180camsh362688f30cca4dap146660jsn01aa1cbb95da',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getCryptos:builder.query({
            query:() => createRequest('/coins')
        })
    })
})
  
export const { useGetCryptosQuery, } = cryptoApi