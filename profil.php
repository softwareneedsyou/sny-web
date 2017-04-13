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
                    <br><br>
                    <div class="row">
                        <div class="col-xs-1"></div>
                        <div class="col-xs-7">
                            <h4>
                            Pseudo : -- Pseudo --<br><br>
                            Nom : -- Nom --<br><br>
                            Prenom : -- Prenom --<br><br>
                            Adresse E-mail :  --  Mail --<br><br>
                            </h4>
                        </div>
                        <div class="col-xs-3 thumb">
                            <a class="thumbnail" href="#">
                                <img class="img-responsive" src="http://placehold.it/400x400" alt="">
                            </a>
                        </div>
                    </div>
                    <hr>
                    <h3>Score Total : -- Score --</h3><br><br>
                    <table class="table">
                        <tr>
                            <th>#</th>
                            <th>Nom du Niveau</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>-- Niveau --</td>
                            <td>-- Score -- pts</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-- Niveau --</td>
                            <td>-- Score -- pts</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-- Niveau --</td>
                            <td>-- Score -- pts</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-- Niveau --</td>
                            <td>-- Score -- pts</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-- Niveau --</td>
                            <td>-- Score -- pts</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr>
        </div>
        
        <?php include("footer.php"); ?>
        
        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
