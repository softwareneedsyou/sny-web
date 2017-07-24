function connexion(){
    var username = $("#connexionUsername").val();
    var password = $("#connexionPwd").val();
    
    var error = 0;
    var errorMessage = "";
    
    if(username.length < 3 || username.length > 20){
        error ++;
        errorMessage += "Le Pseudo doit contenir entre 3 et 20 caracteres<br>";
    }
    
    if(password.length < 6 || password.length > 20){
        error ++;
        errorMessage += "Le Mot de passe doit contenir entre 6 et 20 caracteres<br>";
    }
    
    if(error == 0){
        getConnexion(username, password)
        .then(function(data){
            console.log(data);
            setInformation(data)
            .then(function(){
                alert("Connexion Réussi");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de connexion");
            })
        }).catch(function(){
            alert("Erreur lors de connexion");
        });
    } else {
        $("#errorConnexionUser").html(errorMessage);
    }
}
//Fonction déclanchée sur le Onclick de l'ajout utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function addUser(){
    
    var verif = verificationInput();
    
    if(verif == true){
        var firstname = $("#addUserFirstnameCo").val();
        var lastname = $("#addUserLastnameCo").val();
        var username = $("#addUserUsernameCo").val();
        var email = $("#addUserMailCo").val();
        var password = $("#addUserPwdCo").val();
        var admin = 0;
        
        postUser(firstname, lastname, username, password, email, admin)
        .then(function(){
            alert("Inscription Réussi");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de l'inscription");
        });
    } else {
        $("#errorAddUser").html(verif);
    }
}

//Fonction de verification des champs
//In : form inscription
//Out : true si champ valide ou Message erreur
function verificationInput(){
    var firstname = $("#addUserFirstnameCo").val();
    var lastname = $("#addUserLastnameCo").val();
    var username = $("#addUserUsernameCo").val();
    var email = $("#addUserMailCo").val();
    var password = $("#addUserPwdCo").val();
    
    var error = 0;
    var errorMessage = "";
    
    if(firstname.length < 3 || firstname.length > 20){
        error ++;
        errorMessage += "Le Prénom doit contenir entre 3 et 20 caracteres<br>";
    }
    
    if(lastname.length < 3 || lastname.length > 20){
        error ++;
        errorMessage += "Le Nom doit contenir entre 3 et 20 caracteres<br>";
    }
    
    if(username.length < 3 || username.length > 20){
        error ++;
        errorMessage += "Le Pseudo doit contenir entre 3 et 20 caracteres<br>";
    }
    
    if(validateEmail(email) == false){
        error ++;
        errorMessage += "L'email doit etre valide<br>";
    }
    
    if(password.length < 6 || password.length >20){
        error ++;
        errorMessage += "Le Mot de passe doit contenir entre 6 et 20 caracteres<br>";
    }
    
    
    if(error == 0){
        return true;
    } else {
        return errorMessage;
    }
}

//Fonction de verification d'email avec Regex
//In : email
//Out : true ou false
function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}