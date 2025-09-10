import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from "./slices/CounterReducer";
import authReducer from "./slices/authReducer";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },  
})

export default store
