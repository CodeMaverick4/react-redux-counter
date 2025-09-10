import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',          
  initialState,             
  reducers: {               
    increment: (state) => {
      state.value += 2
    },
    decrement: (state) => {
      state.value -= 2
    },

    incrementBy5: (state) => {
      state.value += 5
    },
    decrementBy5: (state) => {
      state.value -= 5
    },
    
  },
})

export const { increment, decrement , incrementBy5, decrementBy5} = counterSlice.actions
export default counterSlice.reducer
