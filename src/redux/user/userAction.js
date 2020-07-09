import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './userRequestType';
import axios from 'axios'
import {API_BASE_URL} from '../../config/Variables'
export const userLogin=(userLoginDetail)=>{
    return (dispatch)=>{
        dispatch(loginRequest());
        let url=API_BASE_URL+'user/login';
        console.log(url);
        console.log(JSON.stringify(userLoginDetail))
        axios.post(url, userLoginDetail)
        .then(response=>{
            let userDetail=response.data;

            console.log(`Received data ${userDetail}`);
            dispatch(loginSuccess(userDetail));
        })
        .catch(error=>{
            console.log("This is error message: "+error.message);
            dispatch(loginFailure(error.message));
        })
    }
}

export const loginRequest = (userLoginDetail) => ({
    type: LOGIN_REQUEST,
    payload:userLoginDetail
})

export const loginSuccess = (userDetail) => ({
    type: LOGIN_SUCCESS,
    payload:userDetail
})
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload:error
})
