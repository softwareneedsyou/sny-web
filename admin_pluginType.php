<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="">
        
        <title>Software Needs You</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/thumbnail-gallery.css" rel="stylesheet">
        <link href="css/bootstrap-table.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <?php include("nav.php"); ?>
        
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <div class="row">
                        <h3 class="col-xs-10">Gestion Plugin Type</h3>
                        <button class="col-xs-2 btn btn-default" data-toggle="modal" data-target="#Add_PluginType_Modal">Ajout Plugin Type</button>
                    </div>
                    <div id="testConnexion"></div>
                    <table id="pluginTypesTable"></table>
                    
                </div>
                <div class="col-xs-1"></div>
            </div>
        
            <br><hr>
        
        
        <?php include("footer.php"); ?>
        
        <script src="js/lib/bootstrap-table.js"></script>
        <script src="js/api/pluginType.js"></script>
        <script src="js/table_pluginType.js"></script>
    </body>
</html>


<!-- EDIT USER MODAL -->
<div id="Edit_PluginType_Modal" class="modal fade">
    <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modification Plugin Type</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center" >Saisir les données</h4><br>
                        
                        <span id="errorEditPluginType"></span><br>
                        
                        <div id="editPluginTypeId" hidden></div>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="editPluginTypeName" placeholder="Nom">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <textarea rows="5" class="form-control text-center" id="editPluginTypeDescr" placeholder="Description" ></textarea>
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" id="val_mod" onclick="editPluginTypeBdd()">Valider</button>
                        </div>                                           
                    </div>
                    <div class="col-xs-2"></div>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button>
            </div>
        </div>

    </div>
</div>


<!-- ADD USER MODAL -->
<div id="Add_PluginType_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Ajout Plugin Type</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>
                        
                        <span id="errorAddPluginType"></span><br>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="addPluginTypeName" placeholder="Nom">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <textarea rows="5" class="form-control text-center" id="addPluginTypeDescr" placeholder="Description" ></textarea>
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="addPluginTypeBdd()">Valider</button>
                        </div>                                           
                    </div>
                    <div class="col-xs-2"></div>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button>
            </div>
        </div>

    </div>
</div>