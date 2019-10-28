<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/10/11
 * Time: 10:53
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'complaints') {
    $tenantID = json_decode($_GET['tenantID']);
    $days = json_decode($_GET['days']);
    echo json_encode(DbHandler::DashboardTenant_Complaints($tenantID, $days));
} elseif ($action == 'openComplaints') {
    $tenantID = json_decode($_GET['tenantID']);
    echo json_encode(DbHandler::DashboardTenant_OpenComplaints($tenantID));
} elseif ($action == 'closeComplaints') {
    $tenantID = json_decode($_GET['tenantID']);
    echo json_encode(DbHandler::DashboardTenant_CloseComplaints($tenantID));
}
