<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $producto = strip_tags(trim($_POST["product"]));
    $asunto = strip_tags(trim($_POST["subject"]));
    $mensaje = trim($_POST["message"]);

    // Validar campos
    if (empty($nombre) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($mensaje)) {
        http_response_code(400);
        echo "Por favor completa el formulario correctamente.";
        exit;
    }

    
    $destinatario = "info@instantfire.net;
    $titulo = "Nuevo mensaje desde el formulario: $asunto";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Producto: $producto\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $nombre <$email>";

    if (mail($destinatario, $titulo, $contenido, $cabeceras)) {
        http_response_code(200);
        echo "Gracias por tu mensaje.";
    } else {
        http_response_code(500);
        echo "Error al enviar el mensaje.";
    }

} else {
    http_response_code(403);
    echo "Hubo un problema con el envío, intenta de nuevo.";
}
?>
