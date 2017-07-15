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
                            </li>';
                    }
                    
                    if($_SESSION['admin'] == 1){
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
                ?>
            </ul>
        </div>
    </div>
</nav>


<div class="modal fade" id="Connexion_Modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content text-center">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 text-center> Connexion </h3><br>
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