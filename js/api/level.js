function getLevels(){
    return $.ajax({
       url : ROUTE_LEVELS,
       type : 'GET',
       data : {flag : "get_levels"},
       dataType : 'json',
    });
}