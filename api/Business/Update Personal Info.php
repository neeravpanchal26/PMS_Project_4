<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-04
 * Time: 11:13
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'specificUser') {
    $userID = $_GET['userID'];
    echo json_encode(DbHandler::UpdatePersonalInfo_SpecificUser($userID));
} elseif ($action == 'suburb') {
    echo json_encode(DbHandler::UpdatePersonalInfo_Suburb());
} elseif ($action == 'update') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DBHandler::UpdatePersonalInfo_UpdateInfo($json->userID, $json->firstName, $json->lastName, $json->dob, $json->contactNumber, $json->email, $json->address1, $json->address2, $json->suburb));
}
