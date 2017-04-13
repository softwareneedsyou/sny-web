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
        
        <div class="container">
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <h3>Gestion User</h3><br>
                    <div class="table_user">
                        <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Pseudo</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>E-mail</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>-- Pseudo --</td>
                            <td>-- Nom --</td>
                            <td>-- Prénom --</td>
                            <td>-- E-mail --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_User_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-- Pseudo --</td>
                            <td>-- Nom --</td>
                            <td>-- Prénom --</td>
                            <td>-- E-mail --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_User_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-- Pseudo --</td>
                            <td>-- Nom --</td>
                            <td>-- Prénom --</td>
                            <td>-- E-mail --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_User_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-- Pseudo --</td>
                            <td>-- Nom --</td>
                            <td>-- Prénom --</td>
                            <td>-- E-mail --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_User_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-- Pseudo --</td>
                            <td>-- Nom --</td>
                            <td>-- Prénom --</td>
                            <td>-- E-mail --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_User_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                    </table>
                    </div><br><hr><br>
                    
                    
                    <h3>Gestion Level</h3><br>
                    <div class="table_level">
                        <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Nom du Niveau</th>
                            <th>Créateur</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>-- Niveau --</td>
                            <td>-- Créateur --</td>
                            <td>-- Date --</td>
                            <td>-- Description --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_Level_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-- Niveau --</td>
                            <td>-- Créateur --</td>
                            <td>-- Date --</td>
                            <td>-- Description --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_Level_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-- Niveau --</td>
                            <td>-- Créateur --</td>
                            <td>-- Date --</td>
                            <td>-- Description --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_Level_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-- Niveau --</td>
                            <td>-- Créateur --</td>
                            <td>-- Date --</td>
                            <td>-- Description --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_Level_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-- Niveau --</td>
                            <td>-- Créateur --</td>
                            <td>-- Date --</td>
                            <td>-- Description --</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#Edit_Level_Modal"></span>&nbsp;
                                <span class="glyphicon glyphicon-remove"></span>
                            </td>
                        </tr>
                    </table>
                    </div>
                    
                </div>
            </div>
            <br><hr>
        </div>
        
        <?php include("footer.php"); ?>
        
        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap-table.js"></script>
    </body>
</html>





<!-- EDIT USER MODAL -->
<div class="modal fade" id="Edit_User_Modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content text-center">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 text-center> Modification User </h3><br>
                <hr>
                <div class="row">
                    <label class="col-xs-4">Adresse E-mail : </label>
                    <input type="email" class="form-control col-xs-8" placeholder="john.doe@example.com">
                </div>
                <div class="row">
                    <label class="col-xs-4">Mot de Passe : </label>
                    <input type="password" class="form-control" placeholder="Mot de Passe">
                </div><br><hr>
                    <button type="submit" class="btn btn-default" data-dismiss="modal">Valider</button>
            </div>
        </div>
    </div>
</div>





<!-- EDIT LEVEL MODAL -->
<div class="modal fade" id="Edit_Level_Modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content text-center">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 text-center> Modification Level </h3><br>
                <hr>
                <div class="row">
                    <label class="col-xs-4">Adresse E-mail : </label>
                    <input type="email" class="form-control col-xs-8" placeholder="john.doe@example.com">
                </div>
                <div class="row">
                    <label class="col-xs-4">Mot de Passe : </label>
                    <input type="password" class="form-control" placeholder="Mot de Passe">
                </div><br><hr>
                    <button type="submit" class="btn btn-default" data-dismiss="modal">Valider</button>
            </div>
        </div>
    </div>
</div>