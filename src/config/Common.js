export let Common={

    getUsername:()=>{
        let user_data=Common.getLoggedInUser();
        if(user_data!==null){
            return user_data.firstName;
        }
    },
    getLoggedInUser:()=>{
        if(sessionStorage.hasOwnProperty("user_data") && sessionStorage.getItem("user_data")!==null){
            return JSON.parse(sessionStorage.getItem("user_data"));
        }
        else{
            return null;
        } 
    },
    isLogin:()=>{
        if(sessionStorage.getItem("user_token").trim()!==""){
            return true;
        }
        return false;
    },
    getAuthHeader:()=>{
        let token=sessionStorage.getItem("login_jwt");
        //let headerVal={ headers: { Authorization: `Bearer ${token}`, 'Access-Control-Allow-Origin': true } }
        let headerVal={headers:{Authorization: `Bearer ${token}`} }
        return headerVal;
    }
}

