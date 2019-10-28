<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/10/10
 * Time: 17:13
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];
if ($action == 'create') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DBHandler::CreateTenant_Create($json->firstName, $json->lastName, $json->dob, $json->contactNumber, $json->email, $json->password));
}
