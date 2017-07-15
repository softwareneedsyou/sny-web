function getStories(){
    return $.ajax({
       url : ROUTE_STORIES,
       type : 'GET',
       data : {flag : "Get Storie"},
       dataType : 'json',
    });
}

function getStorie(id){
    return $.ajax({
       url : ROUTE_STORIES + "/" + id,
       type : 'GET',
       data : {flag : "Get One Storie"},
       dataType : 'json',
    });
}

function postStorie(name, description, ChapterId){
    return $.ajax({
       url : ROUTE_STORIES + "/",
       type : 'POST',
       data : {name: name, description : description, ChapterId : ChapterId, flag : "Set One Storie"},
       dataType : 'json',
    });
}

function putStorie(id, name, description, ChapterId){
    return $.ajax({
       url : ROUTE_STORIES + "/" + id,
       type : 'PUT',
       data : {id : id, name: name, description : description, ChapterId : ChapterId, flag : "Update One Storie"},
       dataType : 'json',
    });
}

function deletStorie(id){
    return $.ajax({
       url : ROUTE_STORIES + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One Storie"},
       dataType : 'json',
    });
}