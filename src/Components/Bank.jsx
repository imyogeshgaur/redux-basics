import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { PAISA_DALO,PAISA_NIKALO } from "../redux/constants";

const Bank = () => {
const paisa = useSelector(state=>state.paisa)
const disaptch = useDispatch()
  return (
    <div>
        <h1>Amount in Bank - {paisa}</h1>
        <button onClick={()=>disaptch({type:PAISA_NIKALO})}>Withdraw Money</button>
        <br /><br />
        <button onClick={()=>disaptch({type:PAISA_DALO})}>Deposit Money </button>
    </div>
  )
}

export default Bank