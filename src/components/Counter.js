import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { decrement, increment } from '../redux/slices/CounterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{value}</div>
      <button onClick={() => dispatch(increment())} style={{marginRight:'10px'}}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </main>
  );
};

export default Counter;
