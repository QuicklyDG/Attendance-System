import { create_attendance_service, get_attendance_service } from "../pages/services/attendance-services";
import { attendancetSlice } from "./attendance-slice";

export function create_attendance_thunk(data) {
    return async function (dispatch) {
        try {
            const res = await create_attendance_service(data);
            return res;
        } catch (error) {
            console.log(error);
        }
    };
}



export function get_attendance_thunk() {
    return async function (dispatch, getState) {
        const res = await get_attendance_service()
        dispatch(attendancetSlice.actions.setDepartments(res.data.result));
    };
}