import axios from "axios"
import {API_BASE_URL} from '../config/Variables'
import { Common } from "../config/Common"

let ProductApi ={
    
    getAllProducts:(callback, errorcallback, {searchText="", pageNo=0, pageSize=10, sortBy="id"})=>{
       
        let headerVal=Common.getAuthHeader();
        let url=`${API_BASE_URL}product/getall?searchText=${searchText}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`
        console.log("URL: "+url);
        axios.get(url, headerVal)
        .then(resp=>{
            console.log(resp.data)
            callback(resp.data)
        })
        .catch(err=>{
            console.log(err.message);
            errorcallback(err.message)
        })
    },
    saveImage:(formData, callback, errorcallback)=>{
    
        let url=API_BASE_URL+'product/fileupload';
        
        let headerVal=Common.getAuthHeader();
        headerVal={...headerVal, 'content-type':'multipart/form-data'}
        axios.post(url, formData, headerVal )
        .then(res => {
          console.log(res);
          if(callback != null){
             callback(res);
          }
        })
        .catch(err => {
          if(errorcallback != null){
             errorcallback(err);
          }
        })
      }

}

export default ProductApi
