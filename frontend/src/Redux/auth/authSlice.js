import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "not-authenticated", // 'authenticated, cheking'
        user: {},
        token: null,
        errorMessage: undefined,
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

export const {
    onChecking, onLogin, onLogout, onLoginError
} = authSlice.actions
export default authSlice.reducer