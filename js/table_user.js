initUser();
//Requete Ajax recupération Users
function initUser(){
    
    getUsers()
    .then(function(data){
        initTableUser(data);
    }).catch(function(){
        console.log("Fail load data users");
    });
    
}
//Initialisation BootstrapTable avec données
function initTableUser(users){ 
	var jsonArray = [];
    for(var personne in users){
        
        if(users[personne].is_admin == 1){
			users[personne].is_admin = "Administrateur";
		}
		else{
			users[personne].is_admin = "Utilisateur simple";
		}
        
        jsonArray.push({
        id : users[personne].id,
        firstname : users[personne].firstname,
        lastname : users[personne].lastname,
        pseudo : users[personne].pseudo,
        email : users[personne].email,
        is_admin : users[personne].is_admin
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
	        field: 'firstname',
	        title: 'Prenom',
            sortable : true,
	    }, {
	        field: 'lastname',
	        title: 'Nom',
            sortable : true,
	    }, {
	        field: 'pseudo',
	        title: 'Pseudo',
            sortable : true,
	    }, {
	        field: 'email',
	        title: 'E-Mail',
            sortable : true,
	    }, {
	        field: 'is_admin',
	        title: 'Admin',
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

//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editUserId").empty();
    	$("#editUserFirstname").empty();
    	$("#editUserLastname").empty();
    	$("#editUserPseudo").empty();
    	$("#editUserMail").empty();
    	$("#editUserAdmin").prop('checked', false);
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editUserId").val(row.id_user);
    	$("#editUserFirstname").val(row.firstname);
    	$("#editUserLastname").val(row.lastname);
    	$("#editUserPseudo").val(row.pseudo);
    	$("#editUserMail").val(row.email);
        
        if(row.is_admin.toLowerCase() == "administrateur"){
        	$("#editUserAdmin").prop('checked', true);
        }
        else{
        	$("#editUserAdmin").prop('checked', false);
        }
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "Valid_Modif("+ row.id_user +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_User_Modal').modal('show');
        

    },
    'click .deleteUser': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer l'utilisateur : "+row.lastname+"?")) {
		    removeUserFromBdd(row.id);
        }
    },
    
};

//Méthode appelée lorsqu'on clique sur l'icône supprimer utilisateur du tableau admin users
function removeUserFromBdd(id){
	
	$.ajax({
       url : '',
       type : 'GET',
       data : {id : id, flag : "remove_user"},
       dataType : 'json',
       success : function(returnData){
           console.log(returnData);
	   		if(returnData == "ok"){
	   			alert("L'utilisateur a été correctement supprimé de la base!");
	   			window.location.reload();
	   		}
	   		else {
	   			alert("ATTENTION : Erreur lors de la suppression de l'utilisateur!");
	   			window.location.reload();
	   		}
       	}
    });
}

function Valid_Modif(id) {
    
    var firstname = $("#addUserInputFirstname").val();
    var lastname = $("#addUserInputLastname").val();
    var pseudo = $("#editUserPseudo").val();
    var email = $("#editUserMail").val();
    var is_admin = document.getElementById("addUserInputAdmin").checked;
    
    if(is_admin == true) {
        is_admin = 1;
    } else {
        is_admin = 0;
    }
    
    updateUserBdd(id, firstname, lastname, pseudo, email, is_admin);
}

//Méthode appelée lorsqu'on clique sur le bouton "editer" 
//inputs : id utilisateur, matricule, nom, prénom, typeUser (admin/user simple) et même chose pour le super_admin
//ouput: reload de la page et alert
function updateUserBdd(id, firstname, lastname, pseudo, email, is_admin){
	
	$.ajax({
       url : '',
       type : 'GET',
       data : {id : id, firstname : firstname, lastname : lastname, pseudo : pseudo, email : email, is_admin : is_admin, flag : "updateUserBdd"},
       dataType : 'json',
       success : function(returnData){
           console.log(returnData.val());
   		}
	});
    window.location.reload();
}