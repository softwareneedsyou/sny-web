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
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <?php include("nav.php"); ?>
        
        <div class="container">
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <br>
                    <div class="row">
                        <div class="col-xs-12 thumb">
                            <img class="img-responsive" src="http://placehold.it/1200x200" alt="">
                        </div>
                        <div class="col-xs-12 text-center"><h3>-- Nom du Niveau --</h3></div>
                        <div class="col-xs-9"></div>
                        <div class="col-xs-3"><button class="btn btn-default">Télécharger le Niveau</button></div>
                    </div>
                    <br><br>
                    
                    <div class="row">
                        <div class="col-xs-1"></div>
                        <div class="col-xs-2">Créateur : </div>
                        <div class="col-xs-6">-- Nom du Créateur --</div>
                        <div class="col-xs-2"></div>
                        <div class="col-xs-1"></div>
                    </div><br>
                    
                    <div class="row">
                        <div class="col-xs-1"></div>
                        <div class="col-xs-2">Date : </div>
                        <div class="col-xs-8">-- Date du Niveau --</div>
                        <div class="col-xs-1"></div>
                    </div><br>
                    
                    <div class="row">
                        <div class="col-xs-1"></div>
                        <div class="col-xs-2">Description : </div>
                        <div class="col-xs-8">-- Description --</div>
                        <div class="col-xs-1"></div>
                    </div><br><br>
                    
                    
                </div>
            </div>
            <hr>
        </div>
        
        <?php include("footer.php"); ?>
        
        <script src="js/level.js"></script>
    </body>
</html>
