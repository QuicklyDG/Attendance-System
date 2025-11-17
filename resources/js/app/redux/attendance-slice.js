import { createSlice } from "@reduxjs/toolkit";

export const attendancetSlice = createSlice({
    name: "attendances",
    initialState: {
        attendances: [],
    },
    reducers: {
        setAttendances: (state, action) => {
            state.attendances = action.payload;
        },

    },
});
export const { setAttendances } = attendancetSlice.actions;

export default attendancetSlice.reducer;
