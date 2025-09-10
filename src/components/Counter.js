import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { decrement, increment, incrementBy5,decrementBy5  } from '../redux/slices/CounterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{value}</div>
      <button onClick={() => dispatch(increment())} style={{marginRight:'10px'}}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button onClick={() => dispatch(incrementBy5())} style={{marginRight:'10px'}}>Increment By 5</button>
      <button onClick={() => dispatch(decrementBy5())}>Decrement By 5</button>
    </main>
  );
};

export default Counter;
