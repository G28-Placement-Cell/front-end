// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     companyInfo: localStorage.getItem('companyInfo') ? JSON.parse(localStorage.getItem('companyInfo')) : null,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setcred(state, action) {
//             state.companyInfo = action.payload;
//             localStorage.setItem('companyInfo', JSON.stringify(action.payload));
//         },
//         logout(state) {
//             state.companyInfo = null;
//             localStorage.removeItem('companyInfo');
//         }
//     }
// })

// export const { setcred, logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companyInfo: localStorage.getItem('companyInfo')
        ? JSON.parse(localStorage.getItem('companyInfo'))
        : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.companyInfo = action.payload;
            localStorage.setItem('companyInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.companyInfo = null;
            localStorage.removeItem('companyInfo');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;