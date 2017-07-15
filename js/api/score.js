function getScores(){
    return $.ajax({
       url : ROUTE_USERS,
       type : 'GET',
       data : {flag : "Get Scores"},
       dataType : 'json',
    });
}

function getScore(id){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'GET',
       data : {flag : "Get One Score"},
       dataType : 'json',
    });
}

function postScore(firstname, lastname, username, email, admin){
    return $.ajax({
       url : ROUTE_USERS + "/",
       type : 'POST',
       data : {firstname: firstname, lastname : lastname, username : username, email : email, admin : admin, flag : "Set One Score"},
       dataType : 'json',
    });
}

function putScore(id, firstname, lastname, username, email, admin){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'PUT',
       data : {id : id, firstname: firstname, lastname : lastname, username : username, email : email, admin : admin, flag : "Update One Score"},
       dataType : 'json',
    });
}

function deletScore(id){
    return $.ajax({
       url : ROUTE_USERS + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One Score"},
       dataType : 'json',
    });
}