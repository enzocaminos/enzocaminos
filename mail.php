<?php
    $destino = "enzocaminosdcv@gmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "Email : \n" . $email . "Asunto: \n" . $asunto . "Mensaje: \n" . $mensaje;
    $cabecera = "From: ". $nombre . "<" . $email . ">\r\n";
    mail($destino, $asunto, $contenido, $cabecera);
    header("Location:gracias.html");
    
?>