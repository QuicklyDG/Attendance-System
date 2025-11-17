import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../redux/app-slice';
import attendancetSlice from '../redux/attendance-slice';
const store = configureStore({
    reducer: {
        app: appSlice,
        attendances: attendancetSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
