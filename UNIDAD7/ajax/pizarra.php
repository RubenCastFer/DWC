<?php
$modulo = $_POST["modulo"];

switch ($modulo) {
    case 'daw1':
        echo json_encode(["modulo1" => "db", "modulo2" => "lenguje de marcas", "modulo3" => "programación"]);
        break;
    case 'daw2':
        echo json_encode(["modulo1" => "cliente", "modulo2" => "servidor", "modulo3" => "interfaces"]);
        break;
    default:
        echo json_encode(["modulo1" => "vacio"]);
        break;
}

