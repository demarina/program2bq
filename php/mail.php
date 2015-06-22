<?php	

	$mail = $_POST["mail"];
	$ident = $_POST["ident"];
    $contenido  = "Ha accedido con exito, con identificador: ".$ident."\r\n"."\r\n";
    $envio = mail($mail, "Acceso a la app web BQ", $contenido);

    if ($envio) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el mensaje";
    }

?>