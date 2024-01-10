const axios = require("axios")
const { createStore, applyMiddleware } = require("redux")
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading: false,
    albums: [],
    error:''
}

const FETCH_ALBUMS_REQUESTED = 'FETCH_ALBUMS_REQUESTED'
const FETCH_ALBUMS_SUCCEEDED = 'FETCH_ALBUMS_SUCCEEDED'
const FETCH_ALBUMS_FAILED = 'FETCH_ALBUMS_FAILED'

function fetchAlbumsRequested(){
    return {
        type:FETCH_ALBUMS_REQUESTED
    }
}
function fetchAlbumsSucceeded(albums){
    return {
        type: FETCH_ALBUMS_SUCCEEDED,
        payload: albums
    }
}
function fetchAlbumsFailed(error){
    return {
        type: FETCH_ALBUMS_FAILED,
        payload: error
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ALBUMS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCH_ALBUMS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                albums: action.payload,
                error:''
            }
        case FETCH_ALBUMS_FAILED:
            return {
                ...state,
                loading: false,
                albums:[],
                error:action.payload
            }
        default:
            return state
    }
}

const fetchAlbums = () => {
    return function(dispatch){
        dispatch(fetchAlbumsRequested())
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            const albums = response.data.map(data => data.title)
            dispatch(fetchAlbumsSucceeded(albums))
        })
        .catch((error) => {
            dispatch(fetchAlbumsFailed(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(fetchAlbums())