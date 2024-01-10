const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
const chocolateActions = require('./features/chocolate/chocolateSlice').chocolateActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

store.dispatch(fetchUsers())


// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))
// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.ordered())
// store.dispatch(chocolateActions.ordered())


// unsubscribe();


