<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-02
 * Time: 15:34
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'users') {
    $userID = $_GET['userID'];
    echo json_encode(DbHandler::ManageUsers_Users($userID));
} elseif ($action == 'type') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ManageUsers_Type($json->userID, $json->status));
} elseif ($action == 'status') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ManageUsers_Status($json->userID, $json->status));
} elseif ($action == 'userTypes'){
    echo json_encode(DbHandler::ManageUsers_UserType());
}
