<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-06-30
 * Time: 19:26
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if ($action == 'users') {
    $days = json_decode($_GET['days']);
    echo json_encode(DBHandler::DashboardItTechnician_Users($days));
}
