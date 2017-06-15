getUsers()
    .then(function(data){
        $("#userPseudo").text = data.pseudo;
        $("#userLastname").text = data.lastname;
        $("#userFirstname").text = data.firstname;
        $("#userEmail").text = data.email;
    
    }).catch(function(){
        console.log("Fail load data users");
    });