getPluginTypes()
    .then(function(data){
        initTablePluginTypes(data);
    }).catch(function(){
        console.log("Fail load data chapter");
    });

//Initialisation BootstrapTable avec données
function initTablePluginTypes(pluginType){ 
    pluginType = pluginType.pluginTypes;
	var jsonArray = [];
    for(var pluginT in pluginType){

        jsonArray.push({
            id : pluginType[pluginT].id,
            name : pluginType[pluginT].name,
            description : pluginType[pluginT].description,
            createdAt : pluginType[pluginT].createdAt,
            updatedAt : pluginType[pluginT].updatedAt
        });
        
    }
	$('#pluginTypesTable').bootstrapTable({
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
	    '<a class="deletePluginType" href="javascript:void(0)" title="Supprimer">',
	    '<i class="glyphicon glyphicon-remove"></i>',
	    '</a></center>'
	].join('');
}

//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editPluginTypeId").empty();
    	$("#editPluginTypeName").empty();
    	$("#editPluginTypeDescr").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editPluginTypeId").val(row.id);
    	$("#editPluginTypeName").val(row.name);
    	$("#editPluginTypeDescr").val(row.description);
        
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "editPluginTypeBdd("+ row.id +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_PluginType_Modal').modal('show');
        

    },
    'click .deletePluginType': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer le PluginType : "+row.name+"?")) {
		    deletPluginType(row.id).then(function(){
                alert("Chapitre Supprimé");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de la suppression du PluginType");
            });
        }
    },
    
};

//Fonction déclanchée sur le Onclick de la modification utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function editPluginTypeBdd(id) {
    
    var verif = verificationInput("edit");
    
    if(verif == true){
        var name = $("#editPluginTypeName").val();
        var description = $("#editPluginTypeDescr").val();
        
        putPluginType(id, name, description)
        .then(function(){
            alert("PluginType Modifié");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de la modification du PluginType");
        });
    } else {
        $("#errorEditPluginType").html(verif);
    }
}

//Fonction déclanchée sur le Onclick de l'ajout utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function addPluginTypeBdd(){
    
    var verif = verificationInput("add");
    
    if(verif == true){
        var name = $("#addPluginTypeName").val();
        var description = $("#addPluginTypeDescr").val();
        
        postPluginType(name, description)
        .then(function(){
            alert("PluginType Ajouté");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de l'ajout du PluginType");
        });
    } else {
        $("#errorAddPluginType").html(verif);
    }
}

//Fonction de verification des champs
//In : choise -> add ou edit
//Out : true si champ valide ou Message erreur
function verificationInput(choise){
    var name = $("#"+ choise +"PluginTypeName").val();
    var description = $("#"+ choise +"PluginTypeDescr").val();
    
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
    
    if(error == 0){
        return true;
    } else {
        return errorMessage;
    }
}