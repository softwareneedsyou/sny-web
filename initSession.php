<?php
session_start();
if(isset($_POST['admin']) && isset($_POST['id'])){
    $_SESSION['co'] = 1;
    $_SESSION['admin'] = $_POST['admin'];
    $_SESSION['id'] = $_POST['id'];
}


?>