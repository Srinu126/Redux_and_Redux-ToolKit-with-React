import { configureStore } from '@reduxjs/toolkit'
// import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import chocolateReducer from '../features/chocolate/chocolateSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        chocolate: chocolateReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export default store