import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { CountriesResponse } from '../interfaces/countriesResponse'

export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery : fetchBaseQuery({baseUrl:'https://restcountries.com/v3.1'}),
    endpoints : (builder)=>({
        countries : builder.query<CountriesResponse[], void>({
            query : ()=> '/all'
        }),
    })
})
export const {useCountriesQuery} = countriesApi
