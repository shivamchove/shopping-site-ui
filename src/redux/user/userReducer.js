import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './userRequestType';

const initialState = {
    loading:false,
    userDetail:{},
    error:''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_REQUEST:
        return { ...state, loading:true }
    case LOGIN_SUCCESS:
        return {
            userDetail:payload, 
            loading:false,
            error:''
        }
    case LOGIN_FAILURE:
        return {
            userDetail:{},
            loading:false,
            error:payload
        }

    default:
        return state
    }
}
