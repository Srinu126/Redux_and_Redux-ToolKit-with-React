const redux = require('redux');
const createStore = redux.createStore
const produce = require('immer').produce


const initialState = {
    city: 'Waterloo',
    address: {
        street: '41 Columbia Street W',
        postalCode: 'N2T1A6',
        block:'34/A'
    }
}

const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

function updateAddress(street){
    return{
        type:UPDATE_ADDRESS,
        payload: street
    }
}

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_ADDRESS:
            return produce(state, (draft) => {
              draft.address.street = action.payload
            })
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
        default:
            return state
    }
}

const store= createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(updateAddress('55 Pinemeadow Crescent Waterloo'));
store.dispatch(updateAddress('Scarborough'))

unsubscribe();