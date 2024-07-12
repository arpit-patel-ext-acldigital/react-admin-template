import { createSlice } from "@reduxjs/toolkit";



const user =  createSlice({
    name: 'user',
    initialState: {
        isLogedIn: false
    },
    reducers: {
        updateUser : (state: any , action: any) => {
            state.isLogedIn  = true;
            return state;
        }
    }
})

export const {
    updateUser
} = user.actions;
export default user.reducer;