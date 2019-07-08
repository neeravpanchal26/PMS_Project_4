<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-07-07
 * Time: 13:23
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'userReport') {
    $typeDesc = $_GET['typeDesc'];
    $cityName = $_GET['cityName'];
    $suburbName = $_GET['suburbName'];
    echo json_encode(DbHandler::UserReport_Users($typeDesc, $cityName, $suburbName));
}
