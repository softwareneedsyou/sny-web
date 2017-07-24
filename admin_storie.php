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
                        <h3 class="col-xs-10">Gestion Storie</h3>
                        <button class="col-xs-2 btn btn-default" data-toggle="modal" data-target="#Add_Storie_Modal">Ajout Storie</button>
                    </div>
                    <div id="testConnexion"></div>
                    <table id="storiesTable"></table>
                    
                </div>
                <div class="col-xs-1"></div>
            </div>
        
            <br><hr>
        
        
        <?php include("footer.php"); ?>
        
        <script src="js/lib/bootstrap-table.js"></script>
        <script src="js/api/storie.js"></script>
        <script src="js/table_storie.js"></script>
    </body>
</html>


<!-- EDIT USER MODAL -->
<div id="Edit_Storie_Modal" class="modal fade">
    <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modification Storie</h4>
            </div>
            <div class="modal-body">
                <form id="formAddStorie">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center" >Saisir les données</h4><br>
                        
                        <span id="errorEditStorie"></span><br>
                        
                        <div id="editStorieId" hidden></div>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="editStorieName" placeholder="Nom">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <textarea rows="5" class="form-control text-center" id="editStorieDescr" placeholder="Description" ></textarea>
                        </div><br>
                        
                        <div class="button-group">
                            <label>Chapitre ID</label>
                            <input type="text" class="form-control text-center" id="editStorieChapterId" placeholder="Id Chapitre">             
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" id="val_mod" onclick="editStorieBdd()">Valider</button>
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
<div id="Add_Storie_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Ajout Storie</h4>
            </div>
            <div class="modal-body">
                <form id="formAddStorie">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>
                        
                        <span id="errorAddStorie"></span><br>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="addStorieName" placeholder="Nom">             
                        </div>

                        <div class="button-group">
                            <label>Description</label>
                            <textarea rows="5" class="form-control text-center" id="addStorieDescr" placeholder="Description" ></textarea>
                        </div><br>
                        
                        <div class="button-group">
                            <label>Chapitre ID</label>
                            <input type="text" class="form-control text-center" id="addStorieChapterId" placeholder="Id Chapitre">             
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="addStorieBdd()">Valider</button>
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