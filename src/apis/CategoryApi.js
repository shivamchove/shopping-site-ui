import axios from "axios"
import {API_BASE_URL} from '../config/Variables'
import { Common } from "../config/Common"

let CategoryApi ={
    
    getAllCategory:(callback, errorcallback, searchText="", sortBy="id", pageNo=0, pageSize=10)=>{
       
        let headerVal=Common.getAuthHeader();
        let url=`${API_BASE_URL}category/getall?searchText=${searchText}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`
        console.log("URL: "+url);
        axios.get(url, headerVal)
        .then(resp=>{
            console.log(resp.data)
            callback(resp.data)
        })
        .catch(error=>{
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            console.log(error.message);
            errorcallback(error.message)
        })
    }
}

export default CategoryApi
