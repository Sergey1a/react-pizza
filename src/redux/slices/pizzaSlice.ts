import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params) => {
        const {currentPage, search, order, sortBy, category} = params;
        const {data} = await axios.get(`https://67fdfcd73da09811b177254c.mockapi.io/item?page=${currentPage}&limit=8&${category && `${category}&`}sortBy=${sortBy}&order=${order}${search}`)
        return data
    },
)

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        getItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    },
})

export const pizzaSelector = (state) => state.pizza

export const {getItems} = pizzaSlice.actions

export default pizzaSlice.reducer