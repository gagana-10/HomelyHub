import {axiosInstance} from "../../utils/axios";
import {setBookingDetails, setBookings} from "./booking-slice";

//fetch all bookings details
export const fetchBookingDetails =(bookingId) => async(dispatch)=>{
    try{
        const response = await axiosInstance.get(`/v1/rent/user/booking/${bookingId}`);
        dispatch(setBookingDetails(response.data.data));
    }catch(error){
        console.log("Error fetching booking details:", error);
    }
}

// fetch user bookings

export const fetchUserBookings = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get("/v1/rent/user/booking");
        dispatch(setBookings(response.data.data.bookings));
    } catch (error) {
        console.error("Error fetching user bookings:", error);
    }
};