import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/action/counter.action';

function Counter(props) {
    
    const dispatch = useDispatch();

    const handeleincree = () => {
        dispatch(increment())
    }
    const handeleecrement = () => {
        dispatch(decrement())
    }
    const countervalues=useSelector(state=>state.counter)
    console.log(countervalues);
    return (
        <div>
            <button onClick={handeleincree}>+</button>
            {countervalues.count}
            <button onClick={handeleecrement}>-</button>
        </div>
    );
}

export default Counter;