function getPluginTypes(){
    return $.ajax({
       url : ROUTE_PLUGINTYPE,
       type : 'GET',
       data : {flag : "Get PluginTypes"},
       dataType : 'json',
    });
}

function getPluginType(id){
    return $.ajax({
       url : ROUTE_PLUGINTYPE + "/" + id,
       type : 'GET',
       data : {flag : "Get One PluginType"},
       dataType : 'json',
    });
}

function postPluginType(name, description){
    return $.ajax({
       url : ROUTE_PLUGINTYPE + "/",
       type : 'POST',
       data : {name: name, description : description, flag : "Set One PluginType"},
       dataType : 'json',
    });
}

function putPluginType(id, name, description){
    return $.ajax({
       url : ROUTE_PLUGINTYPE + "/" + id,
       type : 'PUT',
       data : {name: name, description : description, flag : "Uptdate One PluginType"},
       dataType : 'json',
    });
}

function deletPluginType(id){
    return $.ajax({
       url : ROUTE_PLUGINTYPE + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One PluginType"},
       dataType : 'json',
    });
}