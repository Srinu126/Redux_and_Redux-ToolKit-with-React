const redux = require('redux');

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger();



const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAMRESTOCKED'

//action is an object with type property
//action creator is a function that returns an object
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function addCake(qty=1){
    return{
        type: CAKE_ADDED,
        payload:qty
    }
}
function orderIceCream(){
    return{
        type: ICECREAM_ORDERED,
        payload: 1
    }
}
function addIceCream(qty=1){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//   numofCakes: 10,
//   numofIceCreams: 10
// };
const initialCakeState = {
    numofCakes: 10
}

const initialIceCreamState = {
    numofIceCreams:10
}

// (previousState, action) => newState
const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numofCakes: state.numofCakes-1
            }
        case CAKE_ADDED: {
            return {
                ...state,
                numofCakes: state.numofCakes+action.payload
            }
        }
        default:
            return state;
    }

}
const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED: {
            return {
                ...state,
                numofIceCreams: state.numofIceCreams-1
            }
        }
        case ICECREAM_RESTOCKED: {
            return {
                ...state,
                numofIceCreams: state.numofIceCreams+action.payload
            }
        }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(addCake())
// store.dispatch(addCake())
// store.dispatch(addCake())
// store.dispatch(addCake(5))
const actions = bindActionCreators({orderCake, addCake,orderIceCream,addIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake();
actions.orderCake();
actions.addCake(12);
actions.orderIceCream();
actions.orderIceCream();
actions.addIceCream(10);

unsubscribe();
