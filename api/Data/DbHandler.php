<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-06-26
 * Time: 13:01
 */

namespace Data;

require_once '../Data/DbHelper.php';

class DbHandler
{
    // Login component methods
    public static function Login_Check($username, $password)
    {
        $sp = 'CALL uspLogin_Check(?, ?)';
        $param = array(&$username, &$password);
        return DBHelper::SelectParam($sp, $param);
    }

    // Dashboard It Technician component methods
    public static function DashboardItTechnician_Users($days)
    {
        $sp = 'CALL uspDashboardItTechnician_Users(?)';
        $param = array(&$days);
        return DBHelper::SelectParam($sp, $param);
    }

    // Create User component methods
    public static function CreateUser_UserType()
    {
        $sp = 'CALL uspCreateUser_UserType';
        return DBHelper::Select($sp);
    }
    public static function CreateUser_City()
    {
        $sp = 'CALL uspCreateUser_City';
        return DBHelper::Select($sp);
    }
    public static function CreateUser_Suburb($cityID)
    {
        $sp = 'CALL uspCreateUser_Suburb(?)';
        $param = array(&$cityID);
        return DBHelper::SelectParam($sp,$param);
    }
}
