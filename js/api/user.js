function getUsers(){
    return $.ajax({
       url : ROUTE_USERS,
       type : 'GET',
       data : {flag : "get_users"},
       dataType : 'json',
    });
}
