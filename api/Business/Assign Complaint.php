<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/21
 * Time: 10:40
 */


require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'supplier') {
    echo json_encode(DbHandler::AssignComplaint_Supplier());
} elseif ($action == 'complaints') {
    echo json_encode(DbHandler::AssignComplaint_Complaint());
} elseif ($action == 'images') {
    $compID = $_GET['compID'];
    echo DbHandler::AssignComplaint_ComplaintImages($compID);
} elseif ($action == 'assign') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::AssignComplaint_Assign($json->compID, $json->suppID));
} elseif ($action == 'email') {
    $json = json_decode(file_get_contents('php://input'));

    $complaints = $json->complaints;

    $businessInfo = $json->businessInfo;

    $body = "<html><body><p>Good Day<br>I trust this email finds you well!</p><table><tr><th>Complaint ID</th><th>Property Name</th><th>Address</th><th>Description</th><th>Reported Date Time</th><th>Category</th><th>Tenant</th><th>Tenant Number</th></tr>";

    foreach ($complaints as $c) {
        $body .= "<tr><td>" . $c->ComplaintID . "</td>" . "<td>" . $c->propName . "</td>" . "<td>" . $c->address . "</td>" . "<td>" . $c->Desc . "</td>" . "<td>" . $c->Date . "</td>" . "<td>" . $c->catName . "</td>" . "<td>" . $c->tenantName . "</td>" . "<td>" . $c->ContactNumber . "</td></tr>";
    }

    $body .= "</table><p>Kind Regards<br/>$businessInfo->BusinessName<br>$businessInfo->CityName<br>$businessInfo->BusinessContact<br>$businessInfo->BusinessWebsite</p></body></html>";

    echo json_encode(DbHandler::AssignComplaint_Email($json->suppEmail, "PMS assigned complaints.", $body));
}
