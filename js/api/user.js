function getUsers(){
    return $.ajax({
       url : ROUTE_USERS,
       type : 'GET',
       data : {flag : "Get All Users"},
       dataType : 'json',
    });
}

function getUser(id){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'GET',
       data : {flag : "Get One User"},
       dataType : 'json',
    });
}