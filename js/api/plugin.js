function getPlugins(){
    return $.ajax({
       url : ROUTE_PLUGINS,
       type : 'GET',
       data : {flag : "Get Plugins"},
       dataType : 'json',
    });
}

function getPlugin(id){
    return $.ajax({
       url : ROUTE_PLUGINS + "/" + id,
       type : 'GET',
       data : {flag : "Get One Plugin"},
       dataType : 'json',
    });
}

function postPlugin(name, description, pluginTypeId){
    return $.ajax({
       url : ROUTE_PLUGINS + "/",
       type : 'POST',
       data : {name: name, description : description, pluginTypeId : pluginTypeId, flag : "Set One Plugin"},
       dataType : 'json',
    });
}

function putPlugin(id, name, description, pluginTypeId){
    return $.ajax({
       url : ROUTE_PLUGINS + "/" + id,
       type : 'PUT',
       data : {name: name, description : description, pluginTypeId : pluginTypeId, flag : "Uptdate One Plugin"},
       dataType : 'json',
    });
}

function deletPlugin(id){
    return $.ajax({
       url : ROUTE_PLUGINS + "/" + id,
       type : 'DELETE',
       data : {flag : "Delete One Plugin"},
       dataType : 'json',
    });
}