<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/10/10
 * Time: 19:35
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'complaints') {
    $days = json_decode($_GET['days']);
    echo json_encode(DbHandler::DashboardMaintenanceSupervisor_Complaints($days));
} elseif ($action == 'property') {
    echo json_encode(DbHandler::DashboardMaintenanceSupervisor_Properties());
} elseif ($action == 'owner') {
    echo json_encode(DbHandler::DashboardMaintenanceSupervisor_Owners());
} elseif ($action == 'suppliers') {
    echo json_encode(DbHandler::DashboardMaintenanceSupervisor_Suppliers());
}
