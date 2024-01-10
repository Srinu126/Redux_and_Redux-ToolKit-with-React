const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


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
        builder.addCase(cakeActions.ordered,(state) => {
            state.numOfChocolates--;
        })
    }
})

module.exports = chocolateSlice.reducer
module.exports.chocolateActions = chocolateSlice.actions