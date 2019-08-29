<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-08-17
 * Time: 10:29
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'specificProperty') {
    $propertyID = $_GET['propertyID'];
    echo json_encode(DbHandler::UpdateProperty_Property($propertyID));
} else if ($action == 'update') {
    $json = json_decode(file_get_contents('php://input'));
    echo json_encode(DbHandler::UpdateProperty_UpdateInfo($json->PropertyID,$json->Name, $json->Address1, $json->Address2, $json->Suburb, $json->YearBuilt, $json->Type, $json->Owner, $json->Bedrooms, $json->Bathrooms, $json->Size, $json->Status));
}
