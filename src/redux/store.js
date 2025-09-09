import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from "./slices/CounterReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },  
})

export default store
