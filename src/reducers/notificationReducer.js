import { createSlice } from "@reduxjs/toolkit";

const initialState = "Initial State"

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers:{
        setNotification: (state, action) => {
            return action.payload
        },
        removeNotification: (state, action) => {
            return null
        }
    }
})

export const setTimedNotification = (text, durationInseconds) => {
    return async dispatch => {
        dispatch(setNotification(text))

        setTimeout(() => {
            dispatch(removeNotification())
        }, durationInseconds * 1000);
    }
}

export const {setNotification, removeNotification} = notificationSlice.actions

export default notificationSlice.reducer