<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-08
 * Time: 14:01
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'create') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::CreateOwner_Create($json->firstName, $json->lastName, $json->contactNumber, $json->email, $json->address1, $json->address2, $json->suburb));
}
