<?php

// LOGIN CON DATOS QUEMADOS

session_start();

if (!empty($_POST['usuario']) && !empty($_POST['contraseña'])) {

    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];

    if ($usuario == "admin" && $contraseña == "Esri1234") {

        $_SESSION['user']=$usuario;

        header("Location:inicio.php");

    } else {
        header("Location:index.php?fallo=true");
    }
}

?>