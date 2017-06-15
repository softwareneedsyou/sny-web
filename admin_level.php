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
                        <h3 class="col-xs-10">Gestion Level</h3>
                        <button class="col-xs-2 btn btn-default" data-toggle="modal" data-target="#Add_Level_Modal">Ajout Niveau</button><br>   
                    </div>
                    
                    <div id="levelTable"></div>
                </div>
            </div>
        
            <br><hr>
        
        
        <?php include("footer.php"); ?>
        
        <script src="js/lib/bootstrap-table.js"></script>
        <script src="js/api/level.js"></script>
        <script src="js/table_level.js"></script>
    </body>
</html>


<!-- EDIT LEVEL MODAL -->
<div id="Edit_Level_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modification Niveau</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>

                        <div class="button-group">
                            <label>Nom du Niveau</label>
                            <input type="text" class="form-control text-center" id="editLevelName" placeholder="Nom du Niveau">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <input type="text" class="form-control text-center" id="editLevelDescription" placeholder="Description" >
                        </div>
                        
                        <div class="button-group">
                            <label>Auteur</label>
                            <input type="text" class="form-control text-center" id="editLevelAuteur" placeholder="Auteur" >
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" id="val_mod" onclick="Valid_Modif()" data-dismiss="modal">Valider</button>
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


<!-- EDIT LEVEL MODAL -->
<div id="Add_Level_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Ajout Niveau</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>

                        <div class="button-group">
                            <label>Nom du Niveau</label>
                            <input type="text" class="form-control text-center" id="addLevelName" placeholder="Nom du Niveau">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <input type="text" class="form-control text-center" id="addLevelDescription" placeholder="Description" >
                        </div>
                        
                        <div class="button-group">
                            <label>Auteur</label>
                            <input type="text" class="form-control text-center" id="addLevelAuteur" placeholder="Auteur" >
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="Valid_Modif()" data-dismiss="modal">Valider</button>
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