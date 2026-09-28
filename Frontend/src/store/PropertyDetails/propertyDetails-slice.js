//propertyDetails

import {createSlice} from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
    name:"propertyDetails",
    initialState:{
        propertyDetails:null,
        error:null,
        loading:false
    },
    reducers:{
        getListRequest(state){
            state.loading = true;
            state.error = null;
            state.propertyDetails = null;
        },
        getPropertyDetails(state,action){
            state.propertyDetails = action.payload;
            state.loading=false;
        },
        getErrors(state,action){
            state.error = action.payload
            state.loading=false;
        }
    }
})

export const propertyDetailsAction = propertyDetailsSlice.actions

export default propertyDetailsSlice.reducer;