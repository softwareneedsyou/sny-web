getPlugins()
    .then(function(data){
        initTablePlugin(data);
    }).catch(function(){
        console.log("Fail load data users");
    });

//Initialisation BootstrapTable avec données
function initTablePlugin(users){ 
    users = users.users;
	var jsonArray = [];
    for(var personne in users){
        


        jsonArray.push({
        id : users[personne].id,
        name : users[personne].name,
        description : users[personne].description,
        createdAt : users[personne].createdAt,
        updatedAt : users[personne].updatedAt
        });
        
    }
	$('#usersTable').bootstrapTable({
	    pagination : true,
	    pageSize : 10,
	    search : true,
	    columns: [{
	        field: 'id',
	        title: 'ID',
            sortable : true,
	    }, {
	        field: 'name',
	        title: 'Nom',
            sortable : true,
	    }, {
	        field: 'description',
	        title: 'Description',
            sortable : true,
	    }, {
	        field: 'createdAt',
	        title: 'Créer',
            sortable : true,
	    }, {
	        field: 'updatedAt',
	        title: 'Mise à Jour',
            sortable : true,
	    }, {
	    	field: 'cellFormater',
	    	title: 'Actions',
	    	formatter : operateFormatterModels,
	    	events : operateEventsModels
	    }],
	    
	    data : jsonArray
	});
}

//Méthode pour ajouter deux icones d'action à la fin d'une ligne du tableau des utilisateurs
function operateFormatterModels(value, row, index) {
	return [
	    '<center><a class="modifyModel" href="javascript:void(0)" title="Editer">',
	    '<i class="glyphicon glyphicon-edit"></i>',
	    '</a>&nbsp;&nbsp;&nbsp;',
	    '<a class="deleteUser" href="javascript:void(0)" title="Supprimer">',
	    '<i class="glyphicon glyphicon-remove"></i>',
	    '</a></center>'
	].join('');
}
/*
//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editUserId").empty();
    	$("#editUserFirstname").empty();
    	$("#editUserLastname").empty();
    	$("#editUserUsername").empty();
    	$("#editUserMail").empty();
    	$("#editUserAdmin").prop('checked', false);
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editUserId").val(row.id_user);
    	$("#editUserFirstname").val(row.firstname);
    	$("#editUserLastname").val(row.lastname);
    	$("#editUserUsername").val(row.username);
    	$("#editUserMail").val(row.email);
        
        
        if(row.is_admin.toLowerCase() == "administrateur"){
        	$("#editUserAdmin").prop('checked', true);
        }
        else{
        	$("#editUserAdmin").prop('checked', false);
        }
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "editUserBdd("+ row.id_user +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_User_Modal').modal('show');
        

    },
    'click .deleteUser': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer l'utilisateur : "+row.lastname+"?")) {
		    deletUser(row.id).then(function(){
                alert("Utilisateur Supprimé");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de la suppression de l'utilisateur");
            });
        }
    },
    
};

//Fonction déclanchée sur le Onclick de la modification utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function editUserBdd(id) {
    
    var verif = verificationInput("edit");
    
    if(verif == true){
        var firstname = $("#editUserFirstname").val();
        var lastname = $("#editUserLastname").val();
        var username = $("#editUserUsername").val();
        var email = $("#editUserMail").val();
        var is_admin = document.getElementById("editUserAdmin").checked
        
        putUser(id, firstname, lastname, username, email, is_admin)
        .then(function(){
            alert("Utilisateur Modifié");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de la modification de l'utilisateur");
        });
    } else {
        $("#errorEditUser").html(verif);
    }
}

//Fonction déclanchée sur le Onclick de l'ajout utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function addUserBdd(){
    
    var verif = verificationInput("add");
    
    if(verif == true){
        var firstname = $("#addUserFirstname").val();
        var lastname = $("#addUserLastname").val();
        var username = $("#addUserUsername").val();
        var email = $("#addUserMail").val();
        var is_admin = document.getElementById("addUserAdmin").checked
        
        postUser(firstname, lastname, username, email, is_admin)
        .then(function(){
            alert("Utilisateur Ajouté");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de l'ajout d'utilisateur");
        });
    } else {
        $("#errorAddUser").html(verif);
    }
}

//Fonction de verification des champs
//In : choise -> add ou edit
//Out : true si champ valide ou Message erreur
function verificationInput(choise){
    var firstname = $("#"+ choise +"UserFirstname").val();
    var lastname = $("#"+ choise +"UserLastname").val();
    var username = $("#"+ choise +"UserUsername").val();
    var email = $("#"+ choise +"UserMail").val();
    
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
}*/