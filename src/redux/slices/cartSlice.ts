import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            const doubleItem = state.items.find(
                (item) => item.id === newItem.id && item.types === newItem.types && item.sizes === newItem.sizes
            );

            if (doubleItem) {
                doubleItem.count += 1;
            } else {
                state.items.push({...newItem, count: 1});
            }

            state.totalPrice += newItem.price;
        },
        plusItem: (state, action) => {
            const {id, types, sizes, price} = action.payload;

            const doubleItem = state.items.find(
                (item) => item.id === id && item.types === types && item.sizes === sizes
            );

            if (doubleItem) {
                doubleItem.count += 1;
                state.totalPrice += price;
            }
        },
        minusItem: (state, action) => {
            const {id, types, sizes, price} = action.payload;

            const doubleItem = state.items.find(
                (item) => item.id === id && item.types === types && item.sizes === sizes
            );

            if (doubleItem) {
                doubleItem.count--;
                state.totalPrice -= price;

                if (doubleItem.count === 0) {
                    state.items = state.items.filter(
                        (item) => !(item.id === id && item.types === types && item.sizes === sizes)
                    );
                }
            }
        },
        deleteItem: (state, action) => {
            const {id, types, sizes, price, count} = action.payload;

            const doubleItem = state.items.find(
                (item) => item.id === id && item.types === types && item.sizes === sizes
            );

            if (doubleItem) {
                state.totalPrice -= price * count;
                state.items = state.items.filter(
                    (item) => !(item.id === id && item.types === types && item.sizes === sizes)
                );
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const cartSelector = (state) => state.cart

export const {addItem, deleteItem, clearCart, minusItem, plusItem} = cartSlice.actions;

export default cartSlice.reducer;