function getLevels(){
    return $.ajax({
       url : ROUTE_LEVELS,
       type : 'GET',
       data : {flag : "Get All Levels"},
       dataType : 'json',
    });
}

function getLevel(id){
    return $.ajax({
       url : ROUTE_LEVELS + "/" + id,
       type : 'GET',
       data : {flag : "Get One Level"},
       dataType : 'json',
    });
}