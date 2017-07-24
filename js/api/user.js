function getUsers(){
    return $.ajax({
       url : ROUTE_USERS,
       type : 'GET',
       data : {flag : "Get Users"},
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

function postUser(firstname, lastname, username, password, email, admin){
    return $.ajax({
       url : ROUTE_USERS + "/",
       type : 'POST',
       data : {
           firstname: firstname,
           lastname : lastname,
           username : username,
           password : password,
           email : email,
           admin : admin,
           flag : "Set One User"},
       dataType : 'json',
    });
}

function putUser(id, firstname, lastname, username, email, admin){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'PUT',
       data : {firstname: firstname, lastname : lastname, username : username, email : email, admin : admin, flag : "Update One User"},
       dataType : 'json',
    });
}

function deletUser(id){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One User"},
       dataType : 'json',
    });
}