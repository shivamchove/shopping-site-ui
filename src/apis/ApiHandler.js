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
    }
}