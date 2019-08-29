<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-08-22
 * Time: 18:47
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'property') {
    echo json_encode(DbHandler::AssignProperty_Property());
} elseif ($action == 'tenant') {
    echo json_encode(DbHandler::AssignProperty_Tenants());
} else if ($action == 'propImg') {
    $imgID = $_GET['imgID'];
    echo DbHandler::AssignProperty_PropertyImages($imgID);
} else if ($action == 'imageID') {
    $propertyID = $_GET['propertyID'];
    echo json_encode(DbHandler::AssignProperty_PropertyImageID($propertyID));
} else if ($action == 'add') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::AssignProperty_Add($json->propertyID, $json->tenantID, $json->startDate, $json->endDate));
}
