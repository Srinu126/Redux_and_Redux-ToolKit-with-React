import { createSlice } from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice'


const initialState = {
    numOfChocolates:10
}

const chocolateSlice = createSlice({
    name:'chocolate',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfChocolates--
        },
        restocked: (state,action) => {
            state.numOfChocolates+=action.payload 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered,(state) => {
            state.numOfChocolates--;
        })
    }
})

export default chocolateSlice.reducer
export const {ordered, restocked} = chocolateSlice.actions