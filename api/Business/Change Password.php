<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-03
 * Time: 13:09
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if($action == 'oldPassword') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ChangePassword_OldCheck($json->userID,$json->userPassword));
} elseif ($action == 'update') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ChangePassword_UpdatePassword($json->userID,$json->userPassword));
}
