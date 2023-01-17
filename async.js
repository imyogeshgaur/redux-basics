const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore =  redux.createStore;
const applyMiddleware =  redux.applyMiddleware;

const initalState ={
    loading:true,
    data:[],
    error:""
}

const FETCH_LOADING_STATE = 'FETCH_LOADING_STATE'
const FETCH_SUCCESS_STATE = 'FETCH_SUCCESS_STATE'
const FETCH_ERROR_STATE = 'FETCH_ERROR_STATE'

const loadingAction = ()=>{
    return {
        type:FETCH_LOADING_STATE,
    }
}

const successAction = (users)=>{
    return {
        type:FETCH_SUCCESS_STATE,
        payload:users
    }
}

const errorAction = (error)=>{
    return {
        type:FETCH_LOADING_STATE,
        payload:error
    }
}

const reducer = (state = initalState,action)=>{
    switch (action.type) {
        case FETCH_LOADING_STATE:return {
            ...state,
            loading:true
        }
        case FETCH_SUCCESS_STATE:return {
            ...state,
            data:action.payload
        }
        case FETCH_ERROR_STATE:return{
            ...state,
            data:action.payload
        }
    }
}

const fetchUsers = ()=>{
    return function (dispatch) {
        dispatch(loadingAction())
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(successAction(users))
          })
          .catch(error => {
            dispatch(errorAction(error.message))
          })
      }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log("Inital State : ",store.getState()))
store.dispatch(fetchUsers())