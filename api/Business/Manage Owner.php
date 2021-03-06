<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-08
 * Time: 16:02
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if($action == 'owners') {
    echo json_encode(DbHandler::ManageOwner_Owners());
} elseif($action == 'status') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ManageOwner_Status($json->userID,$json->status));
}
