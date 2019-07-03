<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-01
 * Time: 14:28
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'userType') {
    echo json_encode(DbHandler::CreateUser_UserType());
} elseif ($action == 'city') {
    echo json_encode(DBHandler::CreateUser_City());
} elseif ($action == 'suburb') {
    $cityID = $_GET['cityID'];
    echo json_encode(DbHandler::CreateUser_Suburb($cityID));
} elseif ($action == 'create') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DBHandler::CreateUser_Create($json->firstName, $json->lastName, $json->dob, $json->contactNumber, $json->email, $json->password, $json->userType, $json->address1, $json->address2, $json->suburb));
}
