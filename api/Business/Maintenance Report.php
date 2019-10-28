<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/10/12
 * Time: 11:32
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'property') {
    $ownerName = $_GET['ownerName'];
    $suburbName = $_GET['suburbName'];
    $cityName = $_GET['cityName'];
    $startDate = $_GET['startDate'];
    $endDate = $_GET['endDate'];
    echo json_encode(DbHandler::MaintenanceReport_Property($ownerName, $suburbName, $cityName, $startDate, $endDate));
} elseif ($action == 'complaintStatus') {
    echo json_encode(DbHandler::MaintenanceReport_ComplaintStatus());
} elseif ($action == 'complaint') {
    $propName = $_GET['propName'];
    $tenantName = $_GET['tenantName'];
    $subCat = $_GET['subCat'];
    $cat = $_GET['cat'];
    $ownerName = $_GET['ownerName'];
    $complaintStatus = $_GET['complaintStatus'];
    $startDate = $_GET['startDate'];
    $endDate = $_GET['endDate'];
    echo json_encode(DbHandler::MaintenanceReport_Complaint($propName, $tenantName, $subCat, $cat, $ownerName, $complaintStatus, $startDate, $endDate));
} elseif ($action == 'complaintProperty') {
    $propID = $_GET['propID'];
    echo json_encode(DbHandler::MaintenanceReport_ComplaintByProperty($propID));
} elseif ($action == 'complaintHistory') {
    $propName = $_GET['propName'];
    $complaint = $_GET['complaint'];
    $subCat = $_GET['subCat'];
    $cat = $_GET['cat'];
    $supplier = $_GET['supplier'];
    $complaintStatus = $_GET['complaintStatus'];
    $startDate = $_GET['startDate'];
    $endDate = $_GET['endDate'];
    echo json_encode(DbHandler::MaintenanceReport_ComplaintHistory($propName, $complaint, $cat, $subCat, $supplier, $complaintStatus, $startDate, $endDate));
}
