import {API_BASE_URL} from '../config/Variables'
import ApiHandler from "./ApiHandler";

let ProductApi ={
    
    getAllProducts:(callback, errorcallback, {searchText="", pageNo=0, pageSize=10, sortBy="id"})=>{
       
        let url=`${API_BASE_URL}product/getall?searchText=${searchText}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`
        ApiHandler.getRequest(url, callback, errorcallback);
       
    },
    saveProduct:(formData, callback, errorcallback)=>{
    
        let url=API_BASE_URL+'product/fileupload';
        ApiHandler.postFileRequest(url, formData, callback, errorcallback);
        
    },
    getProductById:(callback, errorcallback, id)=>{
    
        let url=API_BASE_URL+'product/getbyid/'+id;
        ApiHandler.getRequest(url, callback, errorcallback);
        
    }

}

export default ProductApi
