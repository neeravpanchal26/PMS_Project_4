<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-05
 * Time: 10:12
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'info') {
    echo json_encode(DbHandler::BusinessSetting_Info());
} else if ($action == 'logoUpload') {
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
    echo json_encode(DBHandler::BusinessSetting_LogoUpload($actualPath));
    // Delete the file
    unlink($realPath);
} elseif ($action == 'update') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::BusinessSetting_Update($json->name, $json->contact, $json->website, $json->vat, $json->cityID));
} elseif ($action == 'logoDownload') {
    echo DbHandler::BusinessSetting_LogoDownload();
}
