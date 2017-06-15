<?php
session_start();
$_SESSION['co'] = 1;
$_SESSION['admin'] = 1;

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
            <h2>SOFTWARE NEEDS YOU !</h2><br><br><hr><br>
                <div class="row">
                    <div class="col-xs-1"></div>
                    <div class="col-xs-4 grey_block"><br>Description Du Programme Java ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br></div>
                    <div class="col-xs-2"></div>
                    <div class="col-xs-4 grey_block text-center">
                        <br>Telecharger l'application bureau<br><br>
                        <button class="btn btn-default" href="#"><span class="glyphicon glyphicon-download-alt"></span> Telecharger</button><br><br>
                    </div>
                    <div class="col-xs-1"></div>
                </div>
            <br><hr>
        </div>
        
        <?php include("footer.php"); ?>
        
        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
