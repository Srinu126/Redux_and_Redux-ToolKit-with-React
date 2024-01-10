import { createSlice } from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIceCreams:20
}

const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked:(state,action) => {
            state.numOfIceCreams+=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--;
          })
        }
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //        state.numOfIceCreams--;
    //     }
    // }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions