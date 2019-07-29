<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-09
 * Time: 10:18
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'owner') {
    $ownerID = $_GET['ownerID'];
    echo json_encode(DbHandler::UpdateOwnerInfo_SpecificOwner($ownerID));
} elseif ($action == 'updateInfo') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::UpdateOwnerInfo_UpdateInfo($json->ownerID, $json->firstName, $json->lastName, $json->contactNumber, $json->email, $json->address1, $json->address2, $json->suburb));
}
