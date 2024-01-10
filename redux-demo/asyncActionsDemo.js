const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState= {
    loading: false,
    posts:[],
    error:''
}

const FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED'
const FETCH_POSTS_SUCCEEDED = 'FETCH_POSTS_SUCCEEDED'
const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

function fetchPostsRequested(){
    return {
        type: FETCH_POSTS_REQUESTED
    }
}

function fetchPostsSucceeded(posts){
    return {
        type: FETCH_POSTS_SUCCEEDED,
        payload: posts
    }
}
function fetchPostsFailed(error){
    return {
        type: FETCH_POSTS_FAILED,
        payload:error
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_POSTS_REQUESTED:
            return {
                ...state,
                loading:true
            }
        case FETCH_POSTS_SUCCEEDED:
            return {
                ...state,
                loading:false,
                posts: action.payload,
                error:''
            }
        case FETCH_POSTS_FAILED:
            return {
                ...state,
                loading:false,
                posts:[],
                error: action.payload
            }
        default:
            return state
    }

}

const fetchPosts =() =>{
    return function(dispatch){
        dispatch(fetchPostsRequested())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            const posts = response.data.map(post => post.title)
            // console.log("posts",posts)
            dispatch(fetchPostsSucceeded(posts))
        })
        .catch((err) => {
            dispatch(fetchPostsFailed(err.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(fetchPosts())

