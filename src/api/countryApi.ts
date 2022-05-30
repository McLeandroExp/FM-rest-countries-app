import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { CountriesResponse } from '../interfaces/countriesResponse'
import { CountryResponse } from '../interfaces/countryResponse'

export const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery : fetchBaseQuery({baseUrl:'https://restcountries.com/v3.1'}),
    endpoints : (builder)=>({
        countries : builder.query<CountriesResponse[], void>({
            query : ()=> '/all'
        }),
        country : builder.query<CountryResponse[], string>({
            query : (countryName) => `/name/${countryName}`
        }),
        continent : builder.query<CountryResponse[], string>({
            query : (countryName) => `/name/${countryName}`
        })

    })
})
export const {useCountriesQuery,useCountryQuery, useContinentQuery} = countriesApi
