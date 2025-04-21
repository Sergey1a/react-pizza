import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    selectedCategory: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    }
}

export const categorySlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSearch: (state, action) => {
            console.log(action.payload)
            state.searchValue = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
})

export const filterSelector = (state) => state.filter

export const {setCategory, setSort, setCurrentPage, setSearch} = categorySlice.actions

export default categorySlice.reducer