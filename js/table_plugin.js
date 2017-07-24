getPlugins()
    .then(function(data){
        initTablePlugins(data);
    }).catch(function(){
        console.log("Fail load data chapter");
        $('#testConnexion').append ( "<h3> ! Error :  Verifier que vous etes bien connecté à internet et que le serveur Node est bien lancé ! </h3>");
    });

//Initialisation BootstrapTable avec données
function initTablePlugins(plugin){
	var jsonArray = [];
    for(var plugins in plugin){

        jsonArray.push({
            id : plugin[plugins].id,
            name : plugin[plugins].name,
            description : plugin[plugins].description,
            PluginTypeId : plugin[plugins].PluginTypeId,
            createdAt : plugin[plugins].createdAt,
            updatedAt : plugin[plugins].updatedAt
        });
        
    }
	$('#pluginsTable').bootstrapTable({
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
	        field: 'PluginTypeId',
	        title: 'Type de Plugin',
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
	    '<a class="deletePlugin" href="javascript:void(0)" title="Supprimer">',
	    '<i class="glyphicon glyphicon-remove"></i>',
	    '</a></center>'
	].join('');
}

//Méthode appelée lorsque l'utilisateur clique sur les boutons "supprimer" ou "éditer" un utilisateur
window.operateEventsModels = {
    'click .modifyModel': function (e, value, row, index) {
        
    	//On met les champs du modal à vide
    	$("#editPluginId").empty();
    	$("#editPluginName").empty();
    	$("#editPluginDescr").empty();
    	$("#editPluginPluginTypeId").empty();
    	
        //On recupere les valeurs du tableau pour les mettres dans les champs
    	$("#editPluginId").val(row.id);
    	$("#editPluginName").val(row.name);
    	$("#editPluginDescr").val(row.description);
    	$("#editPluginPluginTypeId").val(row.PluginTypeId);
        
    	
        //Déclanchement de la fonction de modification sur le bouton de validation de la Modal
    	$("#val_mod").attr("onclick", "editPluginBdd("+ row.id +")");;
        
        //on fait poper le modal modif utilisateur
        $('#Edit_Plugin_Modal').modal('show');
        

    },
    'click .deletePlugin': function (e, value, row, index) {
       
       	if (confirm("Etes-vous sûr de vouloir supprimer le Plugin : "+row.name+"?")) {
		    deletPlugin(row.id).then(function(){
                alert("Plugin Supprimé");
                location.reload();
            }).catch(function(){
                alert("Erreur lors de la suppression du Plugin");
            });
        }
    },
    
};

//Fonction déclanchée sur le Onclick de la modification utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function editPluginBdd(id) {
    
    var verif = verificationInput("edit");
    
    if(verif == true){
        var name = $("#editPluginName").val();
        var description = $("#editPluginDescr").val();
        var pluginTypeId = $("#editPluginPluginTypeId").val();
        
        putPlugin(id, name, description, pluginTypeId)
        .then(function(){
            alert("Plugin Modifié");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de la modification du Plugin");
        });
    } else {
        $("#errorEditPlugin").html(verif);
    }
}

//Fonction déclanchée sur le Onclick de l'ajout utilisateur
//Lance la verification, puis Ajax vers le node ou Affichage des Erreur
function addPluginBdd(){
    
    var verif = verificationInput("add");
    
    if(verif == true){
        var name = $("#addPluginName").val();
        var description = $("#addPluginDescr").val();
        var pluginTypeId = $("#addPluginPluginTypeId").val();
        
        postPlugin(name, description, pluginTypeId)
        .then(function(){
            alert("Plugin Ajouté");
            location.reload();
        }).catch(function(){
            alert("Erreur lors de l'ajout du Plugin");
        });
    } else {
        $("#errorAddPlugin").html(verif);
    }
}

//Fonction de verification des champs
//In : choise -> add ou edit
//Out : true si champ valide ou Message erreur
function verificationInput(choise){
    var name = $("#"+ choise +"PluginName").val();
    var description = $("#"+ choise +"PluginDescr").val();
    var PluginTypeId = $("#"+ choise +"PluginPluginTypeId").val();
    
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