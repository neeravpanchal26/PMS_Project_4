<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-08-09
 * Time: 09:07
 */

require_once '../Business/Cors_Headers.php';
require_once '../Data/DbHandler.php';

use Data\DbHandler;

$action = $_GET['action'];

if($action=='properties'){
    echo json_encode(DbHandler::ManageProperty_Properties());
}
