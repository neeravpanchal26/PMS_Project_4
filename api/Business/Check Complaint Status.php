<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/29
 * Time: 11:05
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'complaints') {
    $tenantID = $_GET['tenantID'];
    echo json_encode(DbHandler::CheckComplaintStatus_Complaint($tenantID));
} elseif ($action == 'complaintsAll') {
    $tenantID = $_GET['tenantID'];
    echo json_encode(DbHandler::CheckComplaintStatus_ComplaintAll($tenantID));
} elseif ($action == 'complaintDetails') {
    $complaintID = $_GET['complaintID'];
    echo json_encode(DbHandler::CheckComplaintStatus_ComplaintDetails($complaintID));
}
