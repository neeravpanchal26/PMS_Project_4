<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/15
 * Time: 10:17
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'type') {
    echo json_encode(DbHandler::CreateSupplier_Type());
} elseif ($action == 'create') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::CreateSupplier_Create($json->name, $json->email, $json->contactNumber, $json->type, $json->address1, $json->address2, $json->suburb));
}
