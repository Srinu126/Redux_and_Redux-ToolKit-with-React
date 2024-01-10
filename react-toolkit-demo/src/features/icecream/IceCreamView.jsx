import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
    const numofIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of IceCreams - {numofIceCreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order IceCream</button>
        <button onClick={() => dispatch(restocked(5))}>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView