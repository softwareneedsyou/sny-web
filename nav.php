<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">Software Needs You</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="all_levels.php">Niveaux</a>
                </li>
                <?php 
                    if($_SESSION['co'] == 1) {
                        echo '<li>
                                <a href="profil.php">Profil</a>
                            </li>';
                    } else {
                        echo '<li>
                                <a data-toggle="modal" data-target="#Connexion_Modal">Connexion</a>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#Add_User_Modal">Inscription</a>
                            ';
                    }
                    
                    if($_SESSION['admin'] == true){
                        echo '<li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Administration<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                    <li><a href="admin_user.php">Users</a></li>
                                    <li><a href="admin_storie.php">Stories</a></li>
                                    <li><a href="admin_chapter.php">Chapters</a></li>
                                    <li><a href="admin_score.php">Scores</a></li>
                                    <li><a href="admin_plugin.php">Plugins</a></li>
                                    <li><a href="admin_pluginType.php">PluginTypes</a></li>
                                </ul>
                            </li>';
                    }
                    if($_SESSION['co'] == 1){
                        echo '<li>
                                <a href="deco.php">Deconnexion</a>
                            </li>';
                    }
                ?>
            </ul>
        </div>
    </div>
</nav>
<!--
<script src="js/lib/jquery.js"></script>
<script type="text/javascript" src="js/lib/crypto-js/tags/3.1.2/build/rollups/md5.js"></script>
<script type="text/javascript" src="js/lib/digestAuthRequest.js"></script>
<script src="js/lib/digest-ajax.js"></script>-->

<script src="js/nav.js"></script>
<script src="js/api/user.js"></script>
<script src="js/api/login.js"></script>

<?php

if($_SESSION['co'] == 0){

echo '

<!-- CONNEXION USER MODAL -->
<div id="Connexion_Modal" class="modal fade">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Connexion</h4>
            </div>
            <div class="modal-body">
                <form id="formCoUser">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>
                        
                        <span id="errorConnexionUser"></span><br>

                        <div class="button-group">
                            <label>Pseudo</label>
                            <input type="text" class="form-control text-center" id="connexionUsername" placeholder="Pseudo" >
                        </div><br>
                        
                        <div class="button-group">
                            <label>Mot de Passe</label>
                            <input type="password" class="form-control text-center" id="connexionPwd" placeholder="Mot de passe" >
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="connexion()">Valider</button>
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
                <h4 class="modal-title">Inscription</h4>
            </div>
            <div class="modal-body">
                <form id="formInscription">
                <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-8" id="Corps_pop">
                        <h4 class="modal-title text-center">Saisir les données</h4><br>
                        
                        <span id="errorAddUser"></span><br>

                        <div class="button-group">
                            <label>Prenom</label>
                            <input type="text" class="form-control text-center" id="addUserFirstnameCo" placeholder="Prenom"> 
                        </div><br>

                        <div class="button-group">
                            <label>Nom</label>
                            <input type="text" class="form-control text-center" id="addUserLastnameCo" placeholder="Nom" >
                        </div><br>

                        <div class="button-group">
                            <label>Pseudo</label>
                            <input type="text" class="form-control text-center" id="addUserUsernameCo" placeholder="Pseudo" >
                        </div><br>
                        
                        <div class="button-group">
                            <label>Mot de Passe</label>
                            <input type="password" class="form-control text-center" id="addUserPwdCo" placeholder="Mot de passe" >
                        </div><br>

                        <div class="button-group">
                            <label>Mail</label>
                            <input type="text" class="form-control text-center" id="addUserMailCo" placeholder="Mail" >
                        </div><br>

                        <div class="col-xs-4"></div>
                        <div class="col-xs-4">
                            <button type="button" class="btn btn-default" onclick="addUser()">Valider</button>
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

';

}?>