<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/15
 * Time: 12:26
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];
if ($action == 'supplier') {
    echo json_encode(DbHandler::ManageSupplier_Suppliers());
} elseif ($action == 'status') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ManageSupplier_Status($json->userID, $json->status));
}
