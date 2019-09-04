<?php
/**
 * Created by PhpStorm
 * User: nsp
 * Date: 2019/09/03
 * Time: 12:35
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'category') {
    echo json_encode(DbHandler::ReportComplaint_Category());
} elseif ($action == 'categoryImage') {
    $imgID = $_GET['imgID'];
    echo DbHandler::ReportComplaint_CategoryImages($imgID);
} elseif ($action == 'subCategory') {
    $catID = $_GET['catID'];
    echo json_encode(DbHandler::ReportComplaint_SubCategory($catID));
} elseif ($action == 'subImage') {
    $subID = $_GET['subID'];
    echo DbHandler::ReportComplaint_SubCategoryImages($subID);
} elseif ($action == 'property') {
    $tID = $_GET['tID'];
    echo json_encode(DbHandler::ReportComplaint_Property($tID));
} elseif ($action == 'add') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::ReportComplaint_Add($json->propertyID, $json->tenantID, $json->desc, $json->subCat));
} elseif ($action == 'imageUpload') {
    // Get Temp Path
    $tempPath = $_FILES['file']['tmp_name'];
    // Get File Name
    $actualName = $_FILES['file']['name'];
    // New path
    $actualPath = '../uploads/' . $actualName;
    // Move File into new path
    move_uploaded_file($tempPath, $actualPath);
    // Get real path of moved file here
    $realPath = realpath(__DIR__ . '/' . $actualPath);
    // Execute the non query
    echo json_encode(DBHandler::ReportComplaint_Image($actualPath));
    // Delete the file
    unlink($realPath);
}
