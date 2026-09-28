import {propertyDetailsAction} from "./propertyDetails-slice";
import {axiosInstance} from "../../utils/axios.js";

//fetch details of one property using its id
//receive propertyId as parameter
//start loading
//call backend api

export const getPropertyDetails = (id) => async (dispatch) => {
    try{

    dispatch(propertyDetailsAction.getListRequest());
    const response = await axiosInstance.get(`/v1/rent/listing/${id}`);
    console.log(response);
    if(!response){
        throw new Error("No response from server");
    }
    const{data} = response.data;
    dispatch(propertyDetailsAction.getPropertyDetails(data));

    } catch (error) {
        dispatch(propertyDetailsAction.getErrors(error.message));

    }
}

