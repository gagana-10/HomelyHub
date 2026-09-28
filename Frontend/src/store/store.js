import {configureStore} from "@reduxjs/toolkit";
import propertyReducer from "./Property/property-slice";
import propertyDetailsReducer from "./PropertyDetails/propertyDetails-slice";
import userSlice from "./User/user-slice";
import bookingSlice from "./Booking/booking-slice";
import accomodationSlice from "./Accomodation/Accomodation-slice";
import paymentSlice from "./Payment/payment-slice";

const store = configureStore({
    reducer:{
        properties: propertyReducer,
        propertyDetails: propertyDetailsReducer,
        user: userSlice.reducer,
        booking: bookingSlice.reducer,
        accomodation: accomodationSlice.reducer,
        payment: paymentSlice.reducer

    }
});

export default store;