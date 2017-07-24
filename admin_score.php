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
                        <h3 class="col-xs-10">Gestion User</h3>
                        <button class="col-xs-2 btn btn-default" data-toggle="modal" data-target="#Add_User_Modal">Ajout Utilisateur</button>
                    </div>
                    <div id="testConnexion"></div>
                    <table id="usersTable"></table>
                    
                </div>
                <div class="col-xs-1"></div>
            </div>
        
            <br><hr>
        
        
        <?php include("footer.php"); ?>
        
        <script src="js/lib/bootstrap-table.js"></script>
        <script src="js/api/user.js"></script>
        <script src="js/table_user.js"></script>
    </body>
</html>


<!-- EDIT USER MODAL -->
<div id="Edit_User_Modal" class="modal fade">
    <div class="modal-dialog">
        
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modification Utilisateur</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center" >Saisir les données</h4><br>
                        
                        <span id="errorEditUser"></span><br>
                        
                        <div id="editUserId" hidden></div>

                        <div class="button-group">
                            <label>Prenom</label>
                            <input type="text" class="form-control text-center" id="editUserFirstname" placeholder="Prenom">             
                        </div>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="editUserLastname" placeholder="Nom" >
                        </div>

                        <div class="button-group">
                            <label>Pseudo</label>
                            <input type="text" class="form-control text-center" id="editUserUsername" placeholder="Pseudo" >
                        </div>

                        <div class="button-group">
                            <label>Mail</label>
                            <input type="text" class="form-control text-center" id="editUserMail" placeholder="Mail" >
                        </div><br>
                        
                        <div class="button-group">
                            <label>Admin : </label>
                            <input type="checkbox" id="editUserAdmin">
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" id="val_mod" onclick="editUserBdd()">Valider</button>
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
<div id="Add_User_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Ajout Utilisateur</h4>
            </div>
            <div class="modal-body">
                <form id="formAddUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>
                        
                        <span id="errorAddUser"></span><br>

                        <div class="button-group">
                            <label>Prenom</label>
                            <input type="text" class="form-control text-center" id="addUserFirstname" placeholder="Prenom">             
                        </div>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="addUserLastname" placeholder="Nom" >
                        </div>

                        <div class="button-group">
                            <label>Pseudo</label>
                            <input type="text" class="form-control text-center" id="addUserUsername" placeholder="Pseudo" >
                        </div>

                        <div class="button-group">
                            <label>Mail</label>
                            <input type="text" class="form-control text-center" id="addUserMail" placeholder="Mail" >
                        </div><br>
                        
                        <div class="button-group">
                            <label>Admin : </label>
                            <input type="checkbox" id="addUserAdmin">
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="addUserBdd()">Valider</button>
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