import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from './services/countries';
import { booksApi } from './services/books';


export const store = configureStore({
    reducer:{
        [countriesApi.reducerPath]: countriesApi.reducer,
        [booksApi.reducerPath]: booksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware,booksApi.middleware)
})

setupListeners(store.dispatch)