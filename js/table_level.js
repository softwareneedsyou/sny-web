getLevels()
    .then(function(data){
        initTableLevel(data);
    }).catch(function(){
        console.log("Fail load data levels");
    });

//Initialisation BootstrapTable avec données
function initTableLevel(level){ 
	var jsonArray = [];
    for(var personne in level){
        
        jsonArray.push({
        id : level[personne].id,
        name : level[personne].name,
        description : level[personne].description,
        auteur : level[personne].auteur
        });
    }
    
	$('#levelTable').bootstrapTable({
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
	        field: 'auteur',
	        title: 'Auteur',
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
    	$("#editLevelId").empty();
    	$("#editLevelName").empty();
    	$("#editLevelDescription").empty();
    	$("#editLevelAuteur").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editLevelId").val(row.id);
    	$("#editLevelName").val(row.name);
    	$("#editLevelDescription").val(row.description);
    	$("#editLevelAuteur").val(row.auteur);

    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "Valid_Modif("+ row.id +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Level_Modal').modal('show');
        

    },
    'click .deleteUser': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer le niveau : "+row.name+"?")) {
		    removeUserFromBdd(row.id);
        }
    },
    
};
/*
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
}*/