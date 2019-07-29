<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-29
 * Time: 13:13
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'create') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::AddProperty_Add($json->Name, $json->Address1, $json->Address2, $json->Suburb, $json->YearBuilt, $json->Type, $json->Owner, $json->Bedrooms, $json->Bathrooms, $json->Size, $json->Status));
} elseif ($action == 'type'){
    echo json_encode(DbHandler::AddProperty_PropType());
} elseif ($action == 'owner'){
    echo json_encode(DbHandler::AddProperty_Owner());
}
