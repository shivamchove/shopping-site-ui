import axios from "axios"
import { Common } from "../config/Common"

let ApiHandler={
    getRequest:(url, successCallback, failCallback)=>{
        console.log("URL: "+url);
        let headerVal=Common.getAuthHeader();
        axios.get(url, headerVal)
        .then(resp=>{
            console.log(resp.data)
            successCallback(resp.data)
        })
        .catch(error=>{
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            console.log(error.message);
            failCallback(error.message)
        })
    },
    postFileRequest:(url, formData, callback, errorcallback)=>{
        console.log("URL: "+url);
        let headerVal=Common.getAuthHeader();
        headerVal={...headerVal, 'content-type':'multipart/form-data'}
        axios.post(url, formData, headerVal )
        .then(res => {
          console.log(res);
          if(callback != null){
             callback(res);
          }
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            if(errorcallback != null){
                errorcallback(error.message);
            }
        })
    }
}
export default ApiHandler;