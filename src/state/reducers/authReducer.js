import {
    SIGNUP_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REMOVE_ALERT,
    SET_ALERT,
    SIGNUP_SUCCESS,
    SHOW_LOADER,
    HIDE_LOADER,
    
} from "../action-creators/types";


const initialState = {
    isAuthenticated: false,
    loading: true,
    token: localStorage.getItem("token")
}


const authReducer = (state = initialState, action) => {
    
    if (action.type === SIGNUP_SUCCESS) {
        const {payload} = action
        localStorage.setItem("token", payload.token)
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            token: payload.token
        }
    }

    if (action.type === SIGNUP_FAIL) {
        return {
            ...state,
            isAuthenticated: false,
            loading: false,
            token: null
        }
    }

    if (action.type === LOGIN_SUCCESS) {
        const {payload} = action 
        localStorage.setItem("token", payload.token)
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            token: payload.token
        }
    }


    if (action.type === LOGIN_FAIL) {
        return {
            ...state,
            isAuthenticated: false,
            loading: false,
            token: null
        }
    }

    if (action.type === LOGOUT) {
        return {
            ...state,
            isAuthenticated: false,
            loading: false,
            token: null
        }
    }


    return state

}

export default authReducer