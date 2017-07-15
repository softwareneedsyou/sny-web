getStories()
    .then(function(data){
        initTableStories(data);
    }).catch(function(){
        console.log("Fail load data chapter");
    });

//Initialisation BootstrapTable avec données
function initTableStories(storie){ 
    storie = storie.stories;
	var jsonArray = [];
    for(var str in storie){

        jsonArray.push({
            id : storie[str].id,
            name : storie[str].name,
            description : storie[str].description,
            chapterId : storie[str].chapterId,
            createdAt : storie[str].createdAt,
            updatedAt : storie[str].updatedAt
        });
        
    }
	$('#storiesTable').bootstrapTable({
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
	        field: 'chapterId',
	        title: 'Id Chapitre',
            sortable : true,
	    }, {
	        field: 'createdAt',
	        title: 'Créé',
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
	    '<a class="deleteStorie" href="javascript:void(0)" title="Supprimer">',
	    '<i class="glyphicon glyphicon-remove"></i>',
	    '</a></center>'
	].join('');
}

//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editStorieId").empty();
    	$("#editStorieName").empty();
    	$("#editStorieDescr").empty();
    	$("#editStorieChapterId").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editChapterId").val(row.id);
    	$("#editStorieName").val(row.name);
    	$("#editStorieDescr").val(row.description);
    	$("#editStorieChapterId").val(row.chapterId);
        
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "editStorieBdd("+ row.id +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Storie_Modal').modal('show');
        

    },
    'click .deleteStorie': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer la storie : "+row.name+"?")) {
		    deletStorie(row.id).then(function(){
                alert("Storie Supprimé");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de la suppression de la storie");
            });
        }
    },
    
};

//Fonction déclanchée sur le Onclick de la modification utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function editStorieBdd(id) {
    
    var verif = verificationInput("edit");
    
    if(verif == true){
        var name = $("#editStorieName").val();
        var description = $("#editStorieDescr").val();
        var ChapterId = $("#editStorieChapterId").val();
        
        putStorie(id, name, description, ChapterId)
        .then(function(){
            alert("Storie Modifié");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de la modification de la Storie");
        });
    } else {
        $("#errorEditStorie").html(verif);
    }
}

//Fonction déclanchée sur le Onclick de l'ajout utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function addStorieBdd(){
    
    var verif = verificationInput("add");
    
    if(verif == true){
        var name = $("#addStorieName").val();
        var description = $("#addStorieDescr").val();
        var ChapterId = $("#addStorieChapterId").val();
        
        postStorie(name, description, ChapterId)
        .then(function(){
            alert("Storie Ajouté");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de l'ajout de la storie");
        });
    } else {
        $("#errorAddStorie").html(verif);
    }
}

//Fonction de verification des champs
//In : choise -> add ou edit
//Out : true si champ valide ou Message erreur
function verificationInput(choise){
    var name = $("#"+ choise +"StorieName").val();
    var description = $("#"+ choise +"StorieName").val();
    var chapterId = $("#"+ choise +"StorieChapterId").val();
    
    var error = 0;
    var errorMessage = "";
    
    if(name.length < 3 || name.length > 20){
        error ++;
        errorMessage += "Le Nom doit contenir entre 3 et 20 caracteres<br>";
    }
    
    if(description.length < 3 || description.length > 255){
        error ++;
        errorMessage += "La Description doit contenir entre 3 et 255 caracteres<br>";
    }
    
    if(chapterId.length < 0){
        error ++;
        errorMessage += "L'id du Chapitre doit etre surpérieur à 0 <br>";
    }
    
    if(error == 0){
        return true;
    } else {
        return errorMessage;
    }
}