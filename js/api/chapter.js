function getChapters(){
    return $.ajax({
       url : ROUTE_CHAPTERS,
       type : 'GET',
       data : {flag : "Get Chapters"},
       dataType : 'json',
    });
}

function getChapter(id){
    return $.ajax({
       url : ROUTE_CHAPTERS + "/" + id,
       type : 'GET',
       data : {flag : "Get One Chapter"},
       dataType : 'json',
    });
}

function postChapter(name, description){
    return $.ajax({
       url : ROUTE_CHAPTERS + "/",
       type : 'POST',
       data : {name: name, description : description, flag : "Set One Chapter"},
       dataType : 'json',
    });
}

function putChapter(id, name, description){
    return $.ajax({
       url : ROUTE_CHAPTERS + "/" + id,
       type : 'PUT',
       data : {name: name, description : description, flag : "Uptdate One Chapter"},
       dataType : 'json',
    });
}

function deletChapter(id){
    return $.ajax({
       url : ROUTE_CHAPTERS + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One Chapter"},
       dataType : 'json',
    });
}