function getConnexion(username, password){
    var url = ROUTE_LOGIN;
    console.log(username, password);
    return $.ajax({
        url: ROUTE_LOGIN,
        type: 'GET',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
          },
    })
}

function setInformation(user){
    return $.ajax({
        url: './initSession.php',
        type: 'POST',
        data : {admin : user.admin, id : user.id}
    })
}