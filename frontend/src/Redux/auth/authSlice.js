import {createSlice} from '@reduxjs/toolkit'
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL;
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "not-authenticated", // 'authenticated, cheking'
        user: {},
        token: null,
        errorMessage: undefined,
        statusRegister: "not-registered", // 'registered' , 'checking'
        registerMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = "checking";
            state.user = {}
            state.token = null
            state.errorMessage= undefined
        },
        onLogin: (state, {payload}) => {
            state.status = "authenticated";
            state.user = payload.user
            state.token = payload.token
            state.errorMessage= undefined
        },
        onLoginError: (state, {payload}) => {
            state.status = "not-authenticated";
            state.user = {}
            state.token = null
            state.errorMessage= payload
        },
        onLogout: (state) => {
            state.status = "not-authenticated";
            state.user = {}
            state.token = null
            state.errorMessage= undefined
        },
        onCheckingRegister: (state) => {
            state.statusRegister = 'checking'
            state.registerMessage = undefined
        },
        onRegister: (state, {payload}) => {
            console.log(payload, "payload de register")
            state.statusRegister = "registered"
            state.registerMessage = undefined
        },
        onRegisterError: (state, {error}) => {
            console.log(error, "error")
            state.statusRegister = "not-registered"
            state.registerMessage = error
        }
    }
});
export const loginuser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type: onChecking})
            console.log(payload)
        } catch (error) {
            console.error(error, "error")
            dispatch({ type: onLoginError, error: error.response})
        }
    }
}
export const registeruser = (payload) => {
    return async(dispatch)=> {
        try {
            dispatch({type: onCheckingRegister})
            const data = await axios.post(`${apiUrl}/v1/auth/register`, payload)
            console.log(data)
            if(data) {
                dispatch({type: onRegister, payload: data})
            }
        } catch (error) {
            dispatch({type: onRegisterError, error: error})
        }
    }
}
export const {
    onChecking, onLogin, onLogout, onLoginError, onCheckingRegister, onRegister, onRegisterError
} = authSlice.actions
export default authSlice.reducer