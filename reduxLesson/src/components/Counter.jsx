import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset} from '../slices/counterSlice.js'
import styles from '../components/counter.module.css'

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);
  return (
    <>
    <div className={styles.box}>
        <h1 className={styles.display}>{count}</h1>

        <div className={styles.buttons}>
        <button onClick={()=>dispatch(decrement())} className={styles.decrement}>-</button>
        <button onClick={()=> dispatch(reset())} className={styles.reset}>always on zero</button>
        <button onClick={()=>dispatch(increment())} className={styles.increment}>+</button>
        </div>
    </div>
    </>

  )
}

export default Counter