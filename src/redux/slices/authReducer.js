import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
    name:'authSlice',
    initialState: false,
    reducers: {
        login: ()=> true,
        logout: ()=> false,
    }
})

export const {login,logout} = authSlicer.actions
export default authSlicer.reducer