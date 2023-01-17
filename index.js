import redux from "redux"

const DALO_AMT = "DALO_AMT"
const NIKALO_AMT = 'NIKALO_AMT'

const daloAmt =()=>{
    return{
        type:DALO_AMT
    }
}

const nikaloAmt = ()=>{
    return{
        type:NIKALO_AMT
    }
}

const initalAmt ={
    amount:10
}

const nikaloAmtReducer = (state=initalAmt,action)=>{
    switch (action.type) {
        case NIKALO_AMT:return{
            ...state,
            amount:state.amount - 1
        }
        default: return state
    }
}

const daloAmtReducer = (state = initalAmt,action)=>{
    switch (action.type) {
        case DALO_AMT:return{
            ...state,
            amount:state.amount+ 1
        }
        default: return state
    }
}

const rootReducer = redux.combineReducers({
    nikalGaya:nikaloAmtReducer,
    dalaGaya:daloAmtReducer
})

const store = redux.createStore(rootReducer)
const unsubscribe = store.subscribe(()=>console.log("State is : ", store.getState()))
store.dispatch(nikaloAmt())
store.dispatch(nikaloAmt())
store.dispatch(daloAmt())
store.dispatch(daloAmt())
unsubscribe();