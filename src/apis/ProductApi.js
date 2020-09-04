import {API_BASE_URL} from '../config/Variables'
import ApiHandler from "./ApiHandler";

let ProductApi ={
    
    getAllProducts:(callback, errorcallback, {searchText="", pageNo=0, pageSize=10, sortBy="id"})=>{
       
        let url=`${API_BASE_URL}product/getall?searchText=${searchText}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`
        ApiHandler.getRequest(url, callback, errorcallback);
       
    },
    addEditProduct:(formData, callback, errorcallback)=>{
    
        let url=API_BASE_URL+'product/add-update';
        console.log(formData);
        ApiHandler.postFileRequest(url, formData, callback, errorcallback);
        
    },
    getProductById:(callback, errorcallback, id)=>{
    
        let url=API_BASE_URL+'product/getbyid/'+id;
        ApiHandler.getRequest(url, callback, errorcallback);
        
    },
    deleteById:(callback, errorcallback, id)=>{
    
        let url=API_BASE_URL+'product/delete/'+id;
        console.log("URL:: "+url);
        ApiHandler.getRequest(url, callback, errorcallback);
        
    }

}

export default ProductApi
