<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-06-28
 * Time: 10:12
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$incoming = file_get_contents('php://input');
$json = json_decode($incoming);
echo json_encode(DbHandler::Login_Check($json->Username, $json->Password));
