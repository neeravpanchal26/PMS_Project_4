<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/15
 * Time: 14:29
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'supplier') {
    $supplierID = $_GET['supplierID'];
    echo json_encode(DbHandler::UpdateSupplierInfo_SpecificSupplier($supplierID));
} elseif ($action == 'updateInfo') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::UpdateSupplierInfo_UpdateInfo($json->supplierID, $json->name, $json->email, $json->contactNumber, $json->type, $json->address1, $json->address2, $json->suburb));
}
