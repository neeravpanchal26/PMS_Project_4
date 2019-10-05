<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/10/05
 * Time: 12:17
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'complaint') {
    echo json_encode(DbHandler::UpdateComplaint_Complaint());
} elseif ($action == 'status') {
    echo json_encode(DbHandler::UpdateComplaint_Status());
} elseif ($action == 'update') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::UpdateComplaint_Update($json->complaintID, $json->desc, $json->status));
}
