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
        return DBHelper::SelectParam($sp, $param);
    }

    public static function CreateUser_Create($fN, $lN, $dob, $cN, $eA, $pW, $uT, $a1, $a2, $sub)
    {
        $sp = 'CALL uspCreateUser_Create (?,?,?,?,?,?,?,?,?,?)';
        $param = array(&$fN, &$lN, &$dob, &$cN, &$eA, &$pW, &$uT, &$a1, &$a2, &$sub);
        return DBHelper::SelectParam($sp, $param);
    }

    // Manage Users component methods
    public static function ManageUsers_Users($userID)
    {
        $sp = 'CALL uspManageUsers_Users(?)';
        $param = array(&$userID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function ManageUsers_Type($userID, $userType)
    {
        $sp = 'CALL uspManageUsers_Type(?,?)';
        $param = array(&$userID, &$userType);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    public static function ManageUsers_Status($userID, $userStatus)
    {
        $sp = 'CALL uspManageUsers_Status(?,?)';
        $param = array(&$userID, &$userStatus);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    // Change password component methods
    public static function ChangePassword_OldCheck($userID, $userPassword)
    {
        $sp = 'CALL uspChangePassword_OldCheck(?,?)';
        $param = array(&$userID,&$userPassword);
        return DBHelper::SelectParam($sp, $param);
    }
    public static function ChangePassword_UpdatePassword($userID, $userPassword)
    {
        $sp = 'CALL uspChangePassword_UpdatePassword(?,?)';
        $param = array(&$userID,&$userPassword);
        return DBHelper::ExecuteNonQuery($sp,$param);
    }

    // Update personal info component methods
    public static function UpdatePersonalInfo_SpecificUser($userID)
    {
        $sp = 'CALL uspUpdatePersonalInfo_SpecificUser(?)';
        $param = array(&$userID);
        return DBHelper::SelectParam($sp,$param);
    }

    public static function UpdatePersonalInfo_Suburb()
    {
        $sp = 'CALL uspUpdatePersonalInfo_Suburb';
        return DBHelper::Select($sp);
    }

    public static function UpdatePersonalInfo_UpdateInfo($uI, $fN, $lN, $dob, $cN, $eA, $a1, $a2, $sub)
    {
        $sp = 'CALL uspUpdatePersonalInfo_UpdateInfo (?,?,?,?,?,?,?,?,?)';
        $param = array(&$uI, &$fN, &$lN, &$dob, &$cN, &$eA, &$a1, &$a2, &$sub);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }
}
