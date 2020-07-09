import {API_BASE_URL} from '../config/Variables'
import ApiHandler from "./ApiHandler";

let CategoryApi ={
    getAllCategory:(callback, errorcallback, searchText="", sortBy="id", pageNo=0, pageSize=10)=>{
        let url=`${API_BASE_URL}category/getall?searchText=${searchText}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`;
        ApiHandler.getRequest(url, callback, errorcallback);
    }
}

export default CategoryApi
